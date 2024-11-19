import { getCategories } from "../../services/apiCategories"
import { useQuery } from "@tanstack/react-query"
// import type { Categories } from "../../types"
 
export default function useCategories(){
    const{isLoading,data:categories}=useQuery({
        queryKey:["categories"],
        queryFn:getCategories,
      })
    return{isLoading,categories}
}

