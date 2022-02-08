import axios from "axios";

export const postGuess: (payload: any) => Promise<any> = async (payload) => {
  return await axios.post(`/api/guess`, {
    data: typeof payload === 'string' ? payload : JSON.stringify(payload)
  })
    .then(({ data }) => data)
}