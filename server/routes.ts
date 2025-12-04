import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  // Videra waitlist subscription endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if already on waitlist
      const isAlreadyOnWaitlist = await storage.isEmailOnWaitlist(validatedData.email);
      if (isAlreadyOnWaitlist) {
        res.status(200).json({ 
          success: true, 
          message: "You're already on the waitlist!" 
        });
        return;
      }

      const entry = await storage.addToWaitlist(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Successfully added to waitlist",
        id: entry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please enter a valid email address", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message === "Email already on waitlist") {
        res.status(200).json({ 
          success: true, 
          message: "You're already on the waitlist!" 
        });
      } else {
        console.error("Waitlist subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to join waitlist" 
        });
      }
    }
  });

  // Get all waitlist entries (for admin purposes)
  app.get("/api/waitlist", async (_req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json(entries);
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch waitlist entries" 
      });
    }
  });

  return httpServer;
}
