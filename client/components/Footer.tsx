import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
      <div className="footer">
        <p>&copy; 2025EDROH.All rights Reserved.</p>
          <div className="footer__links">
              {['Privacy Policy', 'Terms', 'About', 'Contact Us'].map((item) => (
                  <Link
                      key={item}
                      href={`/${item.toLowerCase().replace('', '-')}`}
                      className='footer__link'
                  >                    {item}
                  </Link>
              ))}
        </div>
      </div>
  )
}
