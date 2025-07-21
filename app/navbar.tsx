"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/auth-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/dreamgo-logo.png" alt="Dream Go India Logo" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold tracking-tight">Dream Go India</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/packages" className="text-sm font-medium hover:text-red-600 transition-colors">
            Packages
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-red-600 transition-colors">
              Destination <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/destinations/uttarakhand">Uttarakhand</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/destinations/himachal-pradesh">Himachal Pradesh</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/destinations/kashmir">Kashmir</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/destinations/sikkim">Sikkim</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/destinations/northeast">Northeast</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-red-600 transition-colors">
              Treks <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/treks/winter-treks">Winter Treks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/treks/summer-treks">Summer Treks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/treks/monsoon-treks">Monsoon Treks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/treks/weekend-treks">Weekend Treks</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/char-dham-yatra" className="text-sm font-medium hover:text-red-600 transition-colors">
            Char Dham Yatra
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-red-600 transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-6">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {user?.firstName || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile?tab=bookings">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile?tab=favorites">Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-red-600 hover:bg-red-700">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/packages" className="text-lg font-medium">
                Packages
              </Link>
              <Link href="/about" className="text-lg font-medium">
                About Us
              </Link>
              <div>
                <h3 className="text-lg font-medium mb-2">Destinations</h3>
                <div className="grid gap-2 pl-4">
                  <Link href="/destinations/uttarakhand" className="text-sm hover:text-red-600 transition-colors">
                    Uttarakhand
                  </Link>
                  <Link href="/destinations/himachal-pradesh" className="text-sm hover:text-red-600 transition-colors">
                    Himachal Pradesh
                  </Link>
                  <Link href="/destinations/kashmir" className="text-sm hover:text-red-600 transition-colors">
                    Kashmir
                  </Link>
                  <Link href="/destinations/sikkim" className="text-sm hover:text-red-600 transition-colors">
                    Sikkim
                  </Link>
                  <Link href="/destinations/northeast" className="text-sm hover:text-red-600 transition-colors">
                    Northeast
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Treks</h3>
                <div className="grid gap-2 pl-4">
                  <Link href="/treks/winter-treks" className="text-sm hover:text-red-600 transition-colors">
                    Winter Treks
                  </Link>
                  <Link href="/treks/summer-treks" className="text-sm hover:text-red-600 transition-colors">
                    Summer Treks
                  </Link>
                  <Link href="/treks/monsoon-treks" className="text-sm hover:text-red-600 transition-colors">
                    Monsoon Treks
                  </Link>
                  <Link href="/treks/weekend-treks" className="text-sm hover:text-red-600 transition-colors">
                    Weekend Treks
                  </Link>
                </div>
              </div>
              <Link href="/char-dham-yatra" className="text-lg font-medium">
                Char Dham Yatra
              </Link>
              <Link href="/gallery" className="text-lg font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact Us
              </Link>
              
              {isAuthenticated ? (
                <div className="space-y-2">
                  <Link href="/profile" className="block text-lg font-medium">
                    My Profile
                  </Link>
                  <Link href="/profile?tab=bookings" className="block text-lg font-medium">
                    My Bookings
                  </Link>
                  <Button 
                    onClick={handleLogout} 
                    variant="outline" 
                    className="w-full text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
