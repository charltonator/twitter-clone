import { Comment } from "../typings"

export const fetchComments = async (tweetId: string) => {
    const res = await fetch('https://twitter-clone-charlton.vercel.app/api/getComments?tweetId=${tweetId}')

    const comments: Comment[] = await res.json()

    return comments
}