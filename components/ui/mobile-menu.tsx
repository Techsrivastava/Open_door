"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Home,
  Info,
  MapPin,
  Mountain,
  Camera,
  Mail,
  ChevronDown,
  Snowflake,
  Sun,
  CloudRain,
  Clock,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  href: string
  icon?: React.ReactNode
  description?: string
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>([])
  const pathname = usePathname()

  const destinations: MenuItem[] = [
    {
      name: "Uttarakhand",
      href: "/destinations/uttarakhand",
      icon: <Mountain className="w-4 h-4" />,
      description: "Valley of Gods",
    },
    {
      name: "Himachal Pradesh",
      href: "/destinations/himachal-pradesh",
      icon: <Mountain className="w-4 h-4" />,
      description: "Snow-capped Peaks",
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
      description: "Mystical Kingdom",
    },
    {
      name: "Northeast",
      href: "/destinations/northeast",
      icon: <Mountain className="w-4 h-4" />,
      description: "Hidden Gems",
    },
  ]

  const treks: MenuItem[] = [
    {
      name: "Winter Treks",
      href: "/treks/winter-treks",
      icon: <Snowflake className="w-4 h-4" />,
      description: "Snow adventures",
    },
    {
      name: "Summer Treks",
      href: "/treks/summer-treks",
      icon: <Sun className="w-4 h-4" />,
      description: "Alpine meadows",
    },
    {
      name: "Monsoon Treks",
      href: "/treks/monsoon-treks",
      icon: <CloudRain className="w-4 h-4" />,
      description: "Lush valleys",
    },
    {
      name: "Weekend Treks",
      href: "/treks/weekend-treks",
      icon: <Clock className="w-4 h-4" />,
      description: "Quick getaways",
    },
    {
      name: "All Treks",
      href: "/treks",
      icon: <List className="w-4 h-4" />,
      description: "Complete collection",
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const MobileNavLink = ({
    href,
    icon,
    children,
    description,
    onClick,
  }: {
    href: string
    icon: React.ReactNode
    children: React.ReactNode
    description?: string
    onClick?: () => void
  }) => (
    <Link
      href={href}
      onClick={() => {
        setIsOpen(false)
        onClick?.()
      }}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50",
        isActive(href)
          ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-300",
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 p-1.5 rounded-md transition-colors duration-200",
          "bg-gray-100 dark:bg-gray-800",
          isActive(href) && "bg-blue-100 dark:bg-blue-900/50",
        )}
      >
        <div
          className={cn(
            "transition-colors duration-200",
            isActive(href) ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400",
          )}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm">{children}</div>
        {description && <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</div>}
      </div>
    </Link>
  )

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 p-0">
          <SheetHeader className="p-6 border-b border-gray-200 dark:border-gray-800">
            <SheetTitle className="text-left">Navigation</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            <MobileNavLink href="/" icon={<Home className="w-4 h-4" />}>
              Home
            </MobileNavLink>

            <MobileNavLink href="/about" icon={<Info className="w-4 h-4" />}>
              About Us
            </MobileNavLink>

            <Collapsible
              open={openSections.includes("destinations")}
              onOpenChange={() => toggleSection("destinations")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-gray-100 dark:bg-gray-800">
                    <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-medium text-sm text-gray-700 dark:text-gray-300">Destinations</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-200",
                    openSections.includes("destinations") && "rotate-180",
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4 mt-2">
                {destinations.map((item) => (
                  <MobileNavLink key={item.href} href={item.href} icon={item.icon} description={item.description}>
                    {item.name}
                  </MobileNavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSections.includes("treks")} onOpenChange={() => toggleSection("treks")}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-gray-100 dark:bg-gray-800">
                    <Mountain className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-medium text-sm text-gray-700 dark:text-gray-300">Treks</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-200",
                    openSections.includes("treks") && "rotate-180",
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4 mt-2">
                {treks.map((item) => (
                  <MobileNavLink key={item.href} href={item.href} icon={item.icon} description={item.description}>
                    {item.name}
                  </MobileNavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <MobileNavLink href="/gallery" icon={<Camera className="w-4 h-4" />}>
              Gallery
            </MobileNavLink>

            <MobileNavLink href="/contact" icon={<Mail className="w-4 h-4" />}>
              Contact Us
            </MobileNavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
