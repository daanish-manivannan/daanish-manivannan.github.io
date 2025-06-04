// emailService.ts
import emailjs from '@emailjs/browser';

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Sends an email using EmailJS.
 * @param {FormData} formData - The data from the contact form (name, email, message).
 * @returns {Promise<void>} A promise that resolves if the email is sent successfully, or rejects if there's an error.
 */
export const sendEmail = async (formData: FormData): Promise<void> => {
  // IMPORTANT: Replace these with your actual EmailJS Service ID, Template ID, and Public Key.
  // You can find these in your EmailJS dashboard (emailjs.com).
  const serviceId = 'service_o15b6ne';   // Updated Service ID
  const templateId = 'template_pnq77j2'; // Updated Template ID (assuming 'lK2K4bY' is the correct template ID from 'lK2K4bYAfA956uBbz')
  const publicKey = 'lK2K4bYAfA956uBbz';   // Updated Public Key

  // Ensure all required IDs are provided
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS service ID, template ID, or public key is missing. Please configure them in emailService.ts');
  }

  try {
    // Send the email using emailjs.send
    // The 'formData' object directly maps to the template variables in your EmailJS template
    const response = await emailjs.send(serviceId, templateId, formData, publicKey);
    console.log('Email successfully sent!', response.status, response.text);
  } catch (error) {
    console.error('Failed to send email:', error);
    // Re-throw the error so the calling component (Contact.tsx) can handle it
    throw error; 
  }
};
