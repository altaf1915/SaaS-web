
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import api from "../services/api"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // ---------------------------------------------
  // Login
  // ---------------------------------------------

  const login = async (credentials) => {
    const response = await api.post(
      "/auth/login",
      credentials
    )

    setUser(response.data.user)

    return response.data
  }

  // ---------------------------------------------
  // Register
  // ---------------------------------------------

  const register = async (userData) => {
    const response = await api.post(
      "/auth/register",
      userData
    )

    setUser(response.data.user)

    return response.data
  }

  // ---------------------------------------------
  // Logout
  // ---------------------------------------------

  const logout = async () => {
    try {
      await api.post("/auth/logout")
    } finally {
      setUser(null)
    }
  }

  // ---------------------------------------------
  // Update profile
  // ---------------------------------------------

  const updateProfile = async (profileData) => {
    const response = await api.put(
      "/auth/profile",
      profileData
    )

    setUser(response.data.user)

    return response.data
  }

  // ---------------------------------------------
  // Load current authenticated user
  // ---------------------------------------------

  const loadCurrentUser = async () => {
    try {
      const response = await api.get("/auth/me")

      setUser(response.data.user)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  // ---------------------------------------------
  // Initial authentication check
  // ---------------------------------------------

  useEffect(() => {
    loadCurrentUser()

    const handleUnauthorized = () => {
      setUser(null)
      setLoading(false)
    }

    window.addEventListener(
      "auth:unauthorized",
      handleUnauthorized
    )

    return () => {
      window.removeEventListener(
        "auth:unauthorized",
        handleUnauthorized
      )
    }
  }, [])

  // ---------------------------------------------
  // Context value
  // ---------------------------------------------

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// ---------------------------------------------
// useAuth Hook
// ---------------------------------------------

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    )
  }

  return context
}

