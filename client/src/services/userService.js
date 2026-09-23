import api from "./api"

const updateProfile = async (profileData) => {
  const response = await api.put(
    "/auth/profile",
    profileData
  )

  return response.data
}

const userService = {
  updateProfile,
}

export default userService