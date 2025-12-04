import { 
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type WaitlistEntry,
  type InsertWaitlist
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  addToWaitlist(entry: InsertWaitlist): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  isEmailOnWaitlist(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private waitlistEntries: Map<string, WaitlistEntry>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.waitlistEntries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async addToWaitlist(entry: InsertWaitlist): Promise<WaitlistEntry> {
    const existingEntry = Array.from(this.waitlistEntries.values()).find(
      (e) => e.email.toLowerCase() === entry.email.toLowerCase()
    );
    
    if (existingEntry) {
      throw new Error("Email already on waitlist");
    }

    const id = randomUUID();
    const waitlistEntry: WaitlistEntry = {
      ...entry,
      id,
      createdAt: new Date(),
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlistEntries.values());
  }

  async isEmailOnWaitlist(email: string): Promise<boolean> {
    return Array.from(this.waitlistEntries.values()).some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );
  }
}

export const storage = new MemStorage();
