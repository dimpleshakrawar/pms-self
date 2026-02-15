type FetchOptions = RequestInit & {
  token?: string
}

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...rest } = options

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...rest.headers,
    },
    credentials: "include",
  })

  if (!res.ok) {
    const error = await res.json().catch(() => null)
    throw new Error(error?.message || "Something went wrong")
  }

  return res.json()
}
