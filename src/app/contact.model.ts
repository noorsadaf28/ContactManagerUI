export interface Contact {
  id: number;              // Unique identifier for the contact
  firstName: string;       // Contact's first name
  lastName: string;        // Contact's last name
  email: string;           // Contact's email address
  password: string;        // Contact's plain text password (likely for creation or updates)
  passwordHash: string;    // Hashed version of the password for secure storage
}
