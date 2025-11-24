import React from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';


export default function NonDashboardNavbar() {
  return (
      <nav className="nondashboard-navbar">
          <div className="nondashboard-navbar__container">
              <div className='nondashboard-navbar__search'>
              <Link href="/" className="nondashboard-navbar__brand">
              EDROH
              </Link>
              <div className='flex items-center gap-4'>
                  <div className="relative group">
                      <Link href="/search" className="nondashboard-navbar__search-input">
                          <span className="hidden sm:inline">Search Courses</span>
                          <span className="sm:hidden">Search</span>
                      </Link>
                      <BookOpen className="nondashboard-navbar__search-icon"/>
                  </div>
                </div>
             </div>     
          </div>
<div className="nondashboard-navbar__actions">
    <button className="nondashboard-navbar__notification-button">
                  <span className="nondashboard-navbar__notification-indicator"></span>
                  <Bell className="nondashboard-navbar__notification-icon"/>
    </button>
             
</div>              
    </nav>
  )
}
