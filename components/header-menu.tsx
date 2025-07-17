"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Mountain,
  MapPin,
  Camera,
  Mail,
  Home,
  Info,
  Snowflake,
  Sun,
  CloudRain,
  Clock,
  List,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  href: string
  icon?: React.ReactNode
  description?: string
}

interface DropdownSection {
  title?: string
  items: MenuItem[]
}

export default function HeaderMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout>()

  const destinations: DropdownSection[] = [
    {
      title: "Popular Destinations",
      items: [
        {
          name: "Uttarakhand",
          href: "/destinations/uttarakhand",
          icon: <Mountain className="w-4 h-4" />,
          description: "Valley of Gods & Sacred Mountains",
        },
        {
          name: "Himachal Pradesh",
          href: "/destinations/himachal-pradesh",
          icon: <Mountain className="w-4 h-4" />,
          description: "Land of Snow-capped Peaks",
        },
        {
          name: "Kashmir",
          href: "/destinations/kashmir",
          icon: <Mountain className="w-4 h-4" />,
          description: "Paradise on Earth",
        },
        {
          name: "Sikkim",
          href: "/destinations/sikkim",
          icon: <Mountain className="w-4 h-4" />,
          description: "Mystical Himalayan Kingdom",
        },
        {
          name: "Northeast",
          href: "/destinations/northeast",
          icon: <Mountain className="w-4 h-4" />,
          description: "Hidden Gems of India",
        },
      ],
    },
  ]

  const treks: DropdownSection[] = [
    {
      title: "Seasonal Treks",
      items: [
        {
          name: "Winter Treks",
          href: "/treks/winter-treks",
          icon: <Snowflake className="w-4 h-4" />,
          description: "Snow adventures & frozen lakes",
        },
        {
          name: "Summer Treks",
          href: "/treks/summer-treks",
          icon: <Sun className="w-4 h-4" />,
          description: "Alpine meadows & clear skies",
        },
        {
          name: "Monsoon Treks",
          href: "/treks/monsoon-treks",
          icon: <CloudRain className="w-4 h-4" />,
          description: "Lush valleys & waterfalls",
        },
        {
          name: "Weekend Treks",
          href: "/treks/weekend-treks",
          icon: <Clock className="w-4 h-4" />,
          description: "Quick getaways & short hikes",
        },
        {
          name: "All Treks",
          href: "/treks",
          icon: <List className="w-4 h-4" />,
          description: "Complete trek collection",
        },
      ],
    },
  ]

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const NavLink = ({
    href,
    children,
    className = "",
  }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50",
        "hover:text-blue-600 dark:hover:text-blue-400",
        isActive(href)
          ? "text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50"
          : "text-gray-700 dark:text-gray-300",
        className,
      )}
      onMouseEnter={() => setHoveredItem(href)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Active indicator */}
      {isActive(href) && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
      )}

      {/* Hover effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300",
          hoveredItem === href && "opacity-100",
        )}
      />
    </Link>
  )

  const DropdownContent = ({ sections }: { sections: DropdownSection[] }) => (
    <div className="w-80 p-2">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-1">
          {section.title && (
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {section.title}
            </div>
          )}
          {section.items.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="p-0">
              <Link
                href={item.href}
                className={cn(
                  "flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                  "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50",
                  "focus:bg-gradient-to-r focus:from-blue-50 focus:to-indigo-50 dark:focus:from-blue-950/50 dark:focus:to-indigo-950/50",
                  "group cursor-pointer",
                  isActive(item.href) &&
                    "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 p-1.5 rounded-md transition-colors duration-200",
                    "bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50",
                    isActive(item.href) && "bg-blue-100 dark:bg-blue-900/50",
                  )}
                >
                  <div
                    className={cn(
                      "transition-colors duration-200",
                      "text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400",
                      isActive(item.href) && "text-blue-600 dark:text-blue-400",
                    )}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "font-medium text-sm transition-colors duration-200",
                      "text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400",
                      isActive(item.href) && "text-blue-600 dark:text-blue-400",
                    )}
                  >
                    {item.name}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                      {item.description}
                    </div>
                  )}
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <nav className="hidden lg:flex items-center gap-1">
      <NavLink href="/">
        <Home className="w-4 h-4" />
        Home
      </NavLink>

      <NavLink href="/about">
        <Info className="w-4 h-4" />
        About Us
      </NavLink>

      <div className="relative" onMouseEnter={() => handleMouseEnter("destination")} onMouseLeave={handleMouseLeave}>
        <DropdownMenu
          open={activeDropdown === "destination"}
          onOpenChange={(open) => setActiveDropdown(open ? "destination" : null)}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-2",
                "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50",
                "hover:text-blue-600 dark:hover:text-blue-400",
                "text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
              )}
            >
              <MapPin className="w-4 h-4" />
              Destinations
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === "destination" && "rotate-180",
                )}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="border-0 shadow-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
            sideOffset={8}
          >
            <DropdownContent sections={destinations} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative" onMouseEnter={() => handleMouseEnter("treks")} onMouseLeave={handleMouseLeave}>
        <DropdownMenu
          open={activeDropdown === "treks"}
          onOpenChange={(open) => setActiveDropdown(open ? "treks" : null)}
        >
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-2",
                "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50",
                "hover:text-blue-600 dark:hover:text-blue-400",
                "text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
              )}
            >
              <Mountain className="w-4 h-4" />
              Treks
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === "treks" && "rotate-180")}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="border-0 shadow-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
            sideOffset={8}
          >
            <DropdownContent sections={treks} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NavLink href="/gallery">
        <Camera className="w-4 h-4" />
        Gallery
      </NavLink>

      <NavLink href="/contact">
        <Mail className="w-4 h-4" />
        Contact Us
      </NavLink>
    </nav>
  )
}
