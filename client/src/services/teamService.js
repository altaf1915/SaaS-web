import api from "./api"

const getMembers = async () => {
  const response =
    await api.get("/team")

  return response.data
}

const addMember = async (memberData) => {
  const response =
    await api.post("/team", memberData)

  return response.data
}

const deleteMember = async (memberId) => {
  const response =
    await api.delete(`/team/${memberId}`)

  return response.data
}

const teamService = {
  getMembers,
  addMember,
  deleteMember,
}

export default teamService