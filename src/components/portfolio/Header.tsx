import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "../ThemeProvider"
import { useState, useEffect } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/30'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl group cursor-pointer">
          <span className="text-accent group-hover:text-accent/80 transition-colors duration-300">
            Pierre Hanne
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
            </a>
          ))}
        </nav>

        {/* Right side - Theme toggle and mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:glow-shadow"
          >
            {theme === "light" ? 
              <Moon className="h-4 w-4 transition-transform duration-300 hover:rotate-12" /> : 
              <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
            }
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-accent/30 hover:border-accent hover:bg-accent/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-background/95 backdrop-blur-lg border-t border-border/30 px-6 py-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-accent/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}