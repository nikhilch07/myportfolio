
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Nikhil Cheriyala. All rights reserved.
    </footer>
  );
}
