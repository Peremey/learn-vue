import { onBeforeMount, ref, type Ref } from "vue";

export type FetchResponse<T> = {
    data: Ref<T | null>;
    error: Ref<Error | null>;
    loading: Ref<boolean>
}

export function useFetch<T>(url: string): FetchResponse<T> {
    const data = ref<T | null>(null) as Ref<T | null>
    const loading = ref<boolean>(false)
    const error = ref<Error | null>(null)

    const fetchData = async () => {
        try {
            loading.value = true
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error(`Failed to dat for ${url}`)
            }
            data.value = await response.json()
        } catch(err) {
            error.value = (err as Error)
        } finally {
            loading.value = false
        }
    }

    onBeforeMount(fetchData);

    return {
        data, loading, error
    }
}

export const useGitHubRepos = (username: string) => {
    const response = useFetch(
        `https://api.github.com/users/${username}/repos`
    )

    return {
        repos: response.data,
        loading: response.loading,
        error: response.error
    }
}