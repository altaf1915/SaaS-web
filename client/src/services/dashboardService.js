import api from "./api"

const getSummary = async () => {
  const response =
    await api.get("/dashboard/summary")

  return response.data
}

const getAnalytics = async () => {
  const response =
    await api.get("/dashboard/analytics")

  return response.data
}

const dashboardService = {
  getSummary,
  getAnalytics,
}

export default dashboardService