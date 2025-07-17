"use client"

import type React from "react"
import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import LanguageCurrencySelector from "./language-currency-selector"
import {
  Menu,
  ChevronDown,
  UserIcon,
  Settings,
  LogOut,
  Bell,
  Home,
  MapPin,
  Mountain,
  Compass,
  Camera,
  Phone,
  Heart,
  Shield,
  X,
  Loader2,
  Star,
  Calendar,
  Info,
  ChevronRight,
} from "lucide-react"

// Custom Components
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg" | "sm"
  disabled?: boolean
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md focus:ring-orange-500 rounded-lg",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent focus:ring-orange-500 rounded-lg",
    ghost: "text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:ring-orange-500 rounded-lg",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

const Badge = ({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
}) => {
  const variants = {
    default: "bg-orange-500 text-white",
    outline: "border border-orange-500 text-orange-500 bg-transparent",
    secondary: "bg-gray-100 text-gray-800",
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

const Avatar = ({
  src,
  alt,
  fallback,
  className = "",
}: { src?: string; alt: string; fallback: string; className?: string }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative rounded-full overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 ${className}`}>
      {src && !imageError ? (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white font-semibold">{fallback}</div>
      )}
    </div>
  )
}

// Enhanced types
interface EnhancedUser {
  id: string
  name: string
  email: string
  avatar?: string
  isLoggedIn: boolean
  notifications?: number
  membershipLevel?: "basic" | "premium" | "vip"
}

interface NavItem {
  name: string
  href: string
  icon?: React.ReactNode
  badge?: string
  description?: string
  children?: NavItem[]
  isNew?: boolean
  isPopular?: boolean
}

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  timestamp: Date
  read: boolean
}

// Mock data
const mockUser: EnhancedUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  isLoggedIn: true,
  notifications: 3,
  membershipLevel: "premium",
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Booking Confirmed",
    message: "Your Kedarnath trek booking has been confirmed",
    type: "success",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
  },
  {
    id: "2",
    title: "Weather Update",
    message: "Clear weather expected for your upcoming trek",
    type: "info",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
  },
  {
    id: "3",
    title: "Special Offer",
    message: "20% off on winter treks - Limited time!",
    type: "warning",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: true,
  },
]

export default function ImprovedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<EnhancedUser>(mockUser)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [isLoading, setIsLoading] = useState(false)
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([])
  const pathname = usePathname()

  // Main navigation items
  const mainNavigationItems: NavItem[] = useMemo(
    () => [
      {
        name: "Home",
        href: "/",
        icon: <Home className="w-4 h-4" />,
        description: "Return to homepage",
      },
      {
        name: "Treks",
        href: "/treks",
        icon: <Mountain className="w-4 h-4" />,
        description: "Adventure awaits",
        isNew: true,
        children: [
          { name: "Winter Treks", href: "/treks/winter-treks", description: "Snow-covered adventures" },
          { name: "Summer Treks", href: "/treks/summer-treks", description: "Perfect weather treks", isPopular: true },
          { name: "Monsoon Treks", href: "/treks/monsoon-treks", description: "Lush green landscapes" },
          { name: "Weekend Treks", href: "/treks/weekend-treks", description: "Quick getaways" },
        ],
      },
      {
        name: "Expeditions",
        href: "/expeditions",
        icon: <Compass className="w-4 h-4" />,
        description: "Epic adventures",
        children: [
          { name: "Himalayan Expeditions", href: "/expeditions/himalayan", description: "Conquer the peaks" },
          { name: "Trekking Expeditions", href: "/expeditions/trekking", description: "Multi-day adventures" },
          { name: "Adventure Expeditions", href: "/expeditions/adventure", description: "Extreme sports" },
          { name: "Cultural Expeditions", href: "/expeditions/cultural", description: "Immerse in culture" },
          { name: "Wildlife Expeditions", href: "/expeditions/wildlife", description: "Nature encounters" },
        ],
      },
      {
        name: "Char Dham",
        href: "/char-dham-yatra",
        icon: <Shield className="w-4 h-4" />,
        description: "Sacred pilgrimage",
        children: [
          { name: "Yamunotri", href: "/char-dham-yatra/yamunotri", description: "Source of Yamuna" },
          { name: "Gangotri", href: "/char-dham-yatra/gangotri", description: "Source of Ganga" },
          { name: "Kedarnath", href: "/char-dham-yatra/kedarnath", description: "Abode of Shiva" },
          { name: "Badrinath", href: "/char-dham-yatra/badrinath", description: "Abode of Vishnu" },
          { name: "Packages", href: "/char-dham-yatra/packages", description: "Complete packages" },
        ],
      },
      {
        name: "About Us",
        href: "/about",
        icon: <Info className="w-4 h-4" />,
        description: "Learn about our story",
      },
      {
        name: "Destinations",
        href: "/destinations",
        icon: <MapPin className="w-4 h-4" />,
        description: "Explore destinations",
        children: [
          { name: "Uttarakhand", href: "/destinations/uttarakhand", description: "Land of Gods" },
          { name: "Himachal Pradesh", href: "/destinations/himachal-pradesh", description: "Mountain paradise" },
          { name: "Kashmir", href: "/destinations/kashmir", description: "Heaven on Earth" },
          { name: "Sikkim", href: "/destinations/sikkim", description: "Hidden gem", isPopular: true },
          { name: "Northeast", href: "/destinations/northeast", description: "Unexplored beauty", isNew: true },
        ],
      },
      { name: "Gallery", href: "/gallery", icon: <Camera className="w-4 h-4" />, description: "Visual journey" },
      { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" />, description: "Get in touch" },
    ],
    [],
  )

  // Mobile bottom navigation items (without More, with Hamburger)
  const mobileBottomNavItems = useMemo(
    () => [
      { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
      { name: "Treks", href: "/treks", icon: <Mountain className="w-5 h-5" /> },
      { name: "Expeditions", href: "/expeditions", icon: <Compass className="w-5 h-5" /> },
      { name: "Char Dham", href: "/char-dham-yatra", icon: <Shield className="w-5 h-5" /> },
    ],
    [],
  )

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/"
      return pathname.startsWith(href)
    },
    [pathname],
  )

  const handleLogin = useCallback(async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    console.log("Login clicked")
  }, [])

  const handleLogout = useCallback(async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setUser({ ...user, isLoggedIn: false })
    setIsLoading(false)
    console.log("Logout clicked")
  }, [user])

  const toggleMobileItem = useCallback((itemName: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }, [])

  const unreadNotifications = useMemo(() => notifications.filter((n) => !n.read).length, [notifications])

  // Dropdown Component
  const Dropdown = ({
    trigger,
    children,
    isOpen,
    onOpenChange,
  }: {
    trigger: React.ReactNode
    children: React.ReactNode
    isOpen: boolean
    onOpenChange: (open: boolean) => void
  }) => {
    return (
      <div className="relative">
        <div onClick={() => onOpenChange(!isOpen)}>{trigger}</div>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => onOpenChange(false)} />
            <div className="absolute right-0 top-full mt-2 z-20 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] animate-in slide-in-from-top-2 duration-300">
              {children}
            </div>
          </>
        )}
      </div>
    )
  }

  // Mobile Navigation Item Component
  const MobileNavItem = ({ item }: { item: NavItem }) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedMobileItems.includes(item.name)

    return (
      <div className="w-full">
        <div
          className={`flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 group hover:bg-orange-50 ${
            isActive(item.href) ? "bg-orange-50 text-orange-600" : ""
          }`}
        >
          {hasChildren ? (
            <button onClick={() => toggleMobileItem(item.name)} className="flex items-center gap-3 flex-1 text-left">
              {item.icon && (
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href) ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.name}</span>
                  {item.isNew && <Badge className="text-xs px-2 py-0.5 bg-green-500">New</Badge>}
                  {item.isPopular && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5 border-orange-300 text-orange-600">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                {item.description && <p className="text-xs text-gray-500 mt-1">{item.description}</p>}
              </div>
              <ChevronRight
                className={`w-4 h-4 text-gray-400 transition-all duration-300 ${
                  isExpanded ? "rotate-90 text-orange-500" : ""
                }`}
              />
            </button>
          ) : (
            <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 flex-1">
              {item.icon && (
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href) ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.name}</span>
                  {item.isNew && <Badge className="text-xs px-2 py-0.5 bg-green-500">New</Badge>}
                  {item.isPopular && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5 border-orange-300 text-orange-600">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                {item.description && <p className="text-xs text-gray-500 mt-1">{item.description}</p>}
              </div>
            </Link>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-2 ml-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 ${
                  isActive(child.href) ? "bg-orange-50 text-orange-600" : ""
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isActive(child.href) ? "bg-orange-500" : "bg-gray-300"}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{child.name}</span>
                    {child.isNew && <Badge className="text-xs px-1.5 py-0.5 bg-green-500">New</Badge>}
                    {child.isPopular && (
                      <Badge variant="outline" className="text-xs px-1.5 py-0.5 border-orange-300 text-orange-600">
                        <Star className="w-2.5 h-2.5 mr-1" />
                      </Badge>
                    )}
                  </div>
                  {child.description && <p className="text-xs text-gray-500 mt-0.5">{child.description}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            <Image
             src="/images/logo.png"
              alt="Open Door Expeditions Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden lg:flex ml-8 gap-1">
              {mainNavigationItems.slice(0, 4).map((item) => {
                if (item.children) {
                  return (
                    <Dropdown
                      key={item.name}
                      isOpen={activeDropdown === item.name}
                      onOpenChange={(open) => setActiveDropdown(open ? item.name : null)}
                      trigger={
                        <Button
                          variant="ghost"
                          className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover:bg-orange-50 hover:scale-105 px-3 py-2 h-9 ${
                            isActive(item.href) ? "text-orange-600 bg-orange-50" : ""
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.isNew && <Badge className="text-xs px-1.5 py-0.5 ml-1 bg-green-500">New</Badge>}
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ml-0.5 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      }
                    >
                      <div className="p-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-2 font-semibold">
                          {item.name}
                        </div>
                        <div className="border-t border-gray-100 my-2" />
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 w-full p-3 transition-colors rounded-lg mx-1 hover:bg-gray-50 ${
                              isActive(child.href) ? "text-orange-600 bg-orange-50" : ""
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isActive(child.href) ? "bg-orange-500" : "bg-gray-300"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{child.name}</span>
                                {child.isNew && <Badge className="text-xs px-1.5 py-0.5 bg-green-500">New</Badge>}
                                {child.isPopular && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs px-1.5 py-0.5 border-orange-300 text-orange-600"
                                  >
                                    <Star className="w-2.5 h-2.5 mr-1" />
                                  </Badge>
                                )}
                              </div>
                              {child.description && <p className="text-xs text-gray-500 mt-0.5">{child.description}</p>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Dropdown>
                  )
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-orange-50 hover:scale-105 flex items-center gap-1.5 h-9 ${
                      isActive(item.href) ? "text-orange-600 bg-orange-50" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.isNew && <Badge className="text-xs px-1.5 py-0.5 bg-green-500">New</Badge>}
                  </Link>
                )
              })}

              {/* More Dropdown for Desktop */}
              <Dropdown
                isOpen={activeDropdown === "more"}
                onOpenChange={(open) => setActiveDropdown(open ? "more" : null)}
                trigger={
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover:bg-orange-50 hover:scale-105 px-3 py-2 h-9"
                  >
                    <span>More</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ml-0.5 ${
                        activeDropdown === "more" ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                }
              >
                <div className="p-2">
                  {mainNavigationItems.slice(4).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 w-full p-3 transition-colors rounded-lg mx-1 hover:bg-gray-50 ${
                        isActive(item.href) ? "text-orange-600 bg-orange-50" : ""
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.icon}
                      <div className="flex-1">
                        <span className="font-medium text-sm">{item.name}</span>
                        {item.description && <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </Dropdown>
            </nav>
          </div>

          {/* Language and Currency Selector */}
          <div className="hidden lg:flex items-center mr-4">
            <LanguageCurrencySelector />
          </div>

          {/* User Section */}
          <div className="hidden lg:flex items-center gap-2 ml-2">
            {user.isLoggedIn ? (
              <>
                {/* Notifications */}
                <Dropdown
                  isOpen={activeDropdown === "notifications"}
                  onOpenChange={(open) => setActiveDropdown(open ? "notifications" : null)}
                  trigger={
                    <Button
                      variant="ghost"
                      size="sm"
                      className="relative hover:scale-110 transition-transform duration-300 h-9 w-9 p-0"
                    >
                      <Bell className="w-4 h-4" />
                      {unreadNotifications > 0 && (
                        <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs animate-pulse bg-red-500 border-2 border-white">
                          {unreadNotifications}
                        </Badge>
                      )}
                    </Button>
                  }
                >
                  <div className="w-80 p-2">
                    <div className="flex items-center justify-between px-3 py-2">
                      <span className="font-semibold">Notifications</span>
                      {unreadNotifications > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {unreadNotifications} new
                        </Badge>
                      )}
                    </div>
                    <div className="border-t border-gray-100 my-2" />
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.slice(0, 5).map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-1"
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              !notification.read ? "bg-orange-500" : "bg-gray-300"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{notification.title}</p>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.timestamp.toLocaleTimeString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dropdown>

                {/* User Profile */}
                <Dropdown
                  isOpen={activeDropdown === "profile"}
                  onOpenChange={(open) => setActiveDropdown(open ? "profile" : null)}
                  trigger={
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 px-2 hover:scale-105 transition-transform duration-300 h-9"
                    >
                      <Avatar
                        src={user.avatar}
                        alt={user.name}
                        fallback={user.name.charAt(0)}
                        className="w-7 h-7 ring-2 ring-transparent hover:ring-orange-200 transition-all duration-300"
                      />
                      <div className="hidden xl:block text-left">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        {user.membershipLevel && (
                          <p className="text-xs text-gray-500 capitalize mt-0.5">{user.membershipLevel} Member</p>
                        )}
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  }
                >
                  <div className="w-56 p-2">
                    <div className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <Avatar src={user.avatar} alt={user.name} fallback={user.name.charAt(0)} className="w-8 h-8" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                          {user.membershipLevel && (
                            <Badge variant="outline" className="text-xs mt-1 capitalize">
                              {user.membershipLevel}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 my-2" />
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg mx-1"
                    >
                      <UserIcon className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/bookings"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg mx-1"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>My Bookings</span>
                    </Link>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg mx-1"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Wishlist</span>
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg mx-1"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <div className="border-t border-gray-100 my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg mx-1 w-full text-left"
                      disabled={isLoading}
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
                      <span>Logout</span>
                    </button>
                  </div>
                </Dropdown>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="hover:scale-105 transition-transform duration-300 h-9 px-4"
                >
                  {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Sign In
                </Button>
                <Button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="hover:scale-105 transition-transform duration-300 h-9 px-4"
                >
                  {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto lg:hidden p-2 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Bottom App Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-2 safe-area-pb">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {mobileBottomNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 min-w-[70px] ${
                isActive(item.href)
                  ? "text-orange-600 bg-orange-50 scale-105"
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 min-w-[70px] ${
              isMenuOpen
                ? "text-orange-600 bg-orange-50 scale-105"
                : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
            }`}
          >
            <Menu className="w-5 h-5" />
            <span className="text-xs font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)} className="p-1 h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full overflow-y-auto pb-24">
              {/* User Profile Section */}
              {user.isLoggedIn && (
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      fallback={user.name.charAt(0)}
                      className="w-12 h-12 ring-2 ring-orange-200"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      {user.membershipLevel && (
                        <Badge variant="outline" className="text-xs mt-1 capitalize">
                          {user.membershipLevel} Member
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="relative hover:scale-110 transition-transform duration-300"
                    >
                      <Bell className="w-4 h-4" />
                      {unreadNotifications > 0 && (
                        <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-xs animate-pulse">
                          {unreadNotifications}
                        </Badge>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Items */}
              <div className="flex-1 p-4 space-y-2">
                {mainNavigationItems.map((item) => (
                  <MobileNavItem key={item.name} item={item} />
                ))}
              </div>

              {/* Language and Currency Selector */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-center mb-2">
                  <LanguageCurrencySelector />
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                {user.isLoggedIn ? (
                  <div className="space-y-2">
                    <Link
                      href="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 p-3 hover:bg-white rounded-lg transition-colors"
                    >
                      <UserIcon className="w-4 h-4" />
                      <span>Profile Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left"
                      disabled={isLoading}
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
                      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      Sign Up
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={handleLogin}
                      disabled={isLoading}
                    >
                      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      Sign In
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for mobile bottom bar */}
      <div className="lg:hidden h-20" />
    </>
  )
}
