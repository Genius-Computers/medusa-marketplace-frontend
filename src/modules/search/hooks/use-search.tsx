import { useState, useTransition, useRef, useCallback, useEffect } from "react"

export const useSearch = (regionId: string, searchAction: (regionId: string, searchTerm: string) => Promise<any[]>) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [products, setProducts] = useState<any[]>([])
    const [showResults, setShowResults] = useState(false)
    const [isPending, startTransition] = useTransition()
    const debounceRef = useRef<NodeJS.Timeout>()
  
    // Debounced search function with cleanup
    const debouncedSearch = useCallback(
      (term: string) => {
        // Clear previous timeout
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
  
        debounceRef.current = setTimeout(() => {
          if (!term.trim()) {
            setProducts([])
            setShowResults(false)
            return
          }
  
          startTransition(async () => {
            try {
              const results = await searchAction(regionId, term)
              setProducts(results)
              setShowResults(true)
            } catch (error) {
              console.error("Search failed:", error)
              setProducts([])
              setShowResults(false)
            }
          })
        }, 1000)
      },
      [regionId, searchAction]
    )
  
    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
      }
    }, [])
  
    // Effect to trigger search when searchTerm changes
    useEffect(() => {
      debouncedSearch(searchTerm)
    }, [searchTerm, debouncedSearch])
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    }
  
    const clearSearch = () => {
      // Clear any pending search
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      setSearchTerm("")
      setProducts([])
      setShowResults(false)
    }
  
    const handleSearch = () => {
      if (searchTerm.trim()) {
        // Clear debounce and search immediately
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
  
        startTransition(async () => {
          try {
            const results = await searchAction(regionId, searchTerm)
            setProducts(results)
            setShowResults(true)
          } catch (error) {
            console.error("Search failed:", error)
            setProducts([])
            setShowResults(false)
          }
        })
      }
    }
  
    const handleProductClick = (product: any) => {
      console.log("Selected product:", product)
      setShowResults(false)
      // Handle product selection here - navigate to product page, etc.
    }
  
    // Hide results when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (!target.closest(".search-container")) {
          setShowResults(false)
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
  
    return {
      searchTerm,
      setSearchTerm,
      products,
      setProducts,
      showResults,
      isPending,
      clearSearch,
      handleInputChange,
      handleSearch,
      handleProductClick,
    }
  }