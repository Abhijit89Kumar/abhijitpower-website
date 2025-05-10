import React from 'react';
import { Mail } from 'lucide-react';

interface EmailFallbackProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  contactEmail: string;
}

/**
 * A component that provides a direct email fallback when the API fails
 */
const EmailFallback: React.FC<EmailFallbackProps> = ({
  name,
  email,
  phone,
  message,
  service,
  contactEmail
}) => {
  // Create a mailto link with the form data pre-filled
  const mailtoLink = `mailto:${contactEmail}?subject=Website Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0AService: ${service}%0D%0A%0D%0A${message}`;

  return (
    <div className="mt-4 bg-white p-4 rounded border border-red-200">
      <p className="text-sm font-medium mb-3">Alternative Contact Method:</p>
      <p className="text-sm text-gray-600 mb-4">
        Our notification system is experiencing issues. Please use one of these alternatives:
      </p>

      <div className="space-y-3">
        <a
          href={mailtoLink}
          className="btn bg-primary text-white hover:bg-primary-dark w-full flex items-center justify-center text-sm"
        >
          <Mail className="h-4 w-4 mr-2" />
          Send Email Directly
        </a>

        <div className="text-center">
          <p className="text-sm font-medium">Or contact us directly:</p>
          <a
            href={`tel:${contactEmail.split('@')[0]}`}
            className="text-primary hover:underline text-sm block mt-1"
          >
            Call {contactEmail.split('@')[0]}
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3 text-center">
        The email option will open your email app with a pre-filled message
      </p>
    </div>
  );
};

export default EmailFallback;
