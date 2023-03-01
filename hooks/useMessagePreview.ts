import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const messagePreview = async({conversationId,listingId, sender}:{conversationId:string, listingId:string, sender:string}) => {
    
   
    const { data: messagePreviewData, error: messagePreviewError } = await supabase
        .from('conversation_messages')
        .select('message_text')
        .eq('conversation_id', conversationId)
        .eq('author', sender)
        .order('sent_at', { ascending: false })
        .limit(1)
        .single()

    const { data: listingTitleData, error: listingTitleError } = await supabase
        .from('listings')
        .select('listing_title')
        .eq('id', listingId)
        .single()

    if (messagePreviewError || listingTitleError) {
        console.log(messagePreviewError || listingTitleError)
    }

    return {
        listingTitle: listingTitleData?.listing_title,
        recentMessageFromUser: messagePreviewData?.message_text
    }
}

export default function useMessagePreview({conversationId,listingId, sender}:{conversationId:string, listingId:string, sender:string}){
    return useQuery(`${sender}-${conversationId}-message-preview`, ()=> messagePreview({conversationId,listingId,sender}))
}
