"use client"

import { useState, useRef, useEffect } from "react"
import { Search, MoreVertical, Phone, Video, Send, Plus, Smile, Image as ImageIcon, Mic, ChevronLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "../../components/ui/scroll-area"
import { cn } from "@/lib/utils"

// Dummy data
const USERS = [
    { id: 1, name: "Alex Thompson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", status: "online", lastMessage: "Let's catch up later!", time: "10:30 AM", unread: 2 },
    { id: 2, name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", status: "offline", lastMessage: "The files are ready for review.", time: "Yesterday", unread: 0 },
    { id: 3, name: "Maria Garcia", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", status: "online", lastMessage: "Happy Birthday! 🎂", time: "Sun", unread: 0 },
    { id: 4, name: "James Wilson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", status: "online", lastMessage: "I'll be there in 5 mins.", time: "Sat", unread: 5 },
    { id: 5, name: "Emily Davis", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", status: "away", lastMessage: "Did you see the new designs?", time: "Jan 28", unread: 0 },
]

const INITIAL_MESSAGES = [
    { id: 1, senderId: 2, text: "Hey! How's it going?", time: "10:00 AM" },
    { id: 2, senderId: 0, text: "Hey Sarah! Doing great, just working on the new chat app UI.", time: "10:02 AM" },
    { id: 3, senderId: 2, text: "That sounds awesome! Can I see the progress?", time: "10:03 AM" },
    { id: 4, senderId: 0, text: "Sure! Sending a screenshot in a moment.", time: "10:04 AM" },
    { id: 5, senderId: 2, text: "Great! Also, don't forget we have the meeting at 2 PM.", time: "10:05 AM" },
    { id: 6, senderId: 0, text: "Got it! I'll be there.", time: "10:06 AM" },
]

export default function ChatPage() {
    const [selectedUser, setSelectedUser] = useState(USERS[1])
    const [messages, setMessages] = useState(INITIAL_MESSAGES)
    const [newMessage, setNewMessage] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        const msg = {
            id: messages.length + 1,
            senderId: 0, // 0 is the current user
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages([...messages, msg])
        setNewMessage("")
    }

    return (
        <div className="flex h-screen bg-black overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className={cn(
                "flex flex-col glass-dark border-r border-white/5 transition-all duration-300 z-20",
                isSidebarOpen ? "w-full md:w-80 lg:w-96" : "w-0 md:w-20 overflow-hidden"
            )}>
                {/* Sidebar Header */}
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                <Smile className="w-6 h-6 text-white" />
                            </div>
                            <h1 className={cn("text-xl font-bold text-white transition-opacity", !isSidebarOpen && "md:opacity-0")}>FlashChat</h1>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className={cn("relative transition-opacity", !isSidebarOpen && "md:opacity-0")}>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                            placeholder="Search conversations..."
                            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-primary/50"
                        />
                    </div>
                </div>

                {/* User List */}
                <ScrollArea className="flex-1">
                    <div className="p-4 space-y-2">
                        {USERS.map((user) => (
                            <button
                                key={user.id}
                                onClick={() => {
                                    setSelectedUser(user)
                                    setIsSidebarOpen(false) // On mobile, close sidebar when user selected
                                }}
                                className={cn(
                                    "w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 group",
                                    selectedUser.id === user.id ? "bg-primary/10 border border-primary/20" : "hover:bg-white/5 border border-transparent"
                                )}
                            >
                                <div className="relative">
                                    <Avatar className="w-12 h-12 border-2 border-transparent group-hover:border-primary/30 transition-all">
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className={cn(
                                        "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black",
                                        user.status === "online" ? "bg-green-500" : user.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                                    )} />
                                </div>

                                <div className={cn("flex-1 text-left transition-opacity", !isSidebarOpen && "md:hidden")}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-white truncate">{user.name}</span>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-tighter">{user.time}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400 truncate max-w-[150px]">{user.lastMessage}</p>
                                        {user.unread > 0 && (
                                            <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                                {user.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </ScrollArea>

                {/* Current User */}
                <div className="p-4 border-t border-white/5 bg-white/5">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                            <AvatarImage src="https://ui-avatars.com/api/?name=Dimple+S" />
                            <AvatarFallback>DS</AvatarFallback>
                        </Avatar>
                        <div className={cn("transition-opacity", !isSidebarOpen && "md:hidden")}>
                            <p className="text-sm font-semibold text-white">Dimple Shakrawar</p>
                            <p className="text-xs text-green-500">Online</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col relative bg-black">
                {/* Background blobs for aesthetics */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/30 blur-[100px]" />
                    <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/30 blur-[100px]" />
                </div>

                {/* Chat Header */}
                <header className="h-20 glass border-b border-white/5 px-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="md:hidden text-gray-400" onClick={() => setIsSidebarOpen(true)}>
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <div className="relative">
                            <Avatar className="w-11 h-11 border-2 border-primary/20">
                                <AvatarImage src={selectedUser.avatar} />
                                <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className={cn(
                                "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black",
                                selectedUser.status === "online" ? "bg-green-500" : selectedUser.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                            )} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">{selectedUser.name}</h2>
                            <p className="text-xs text-gray-400 capitalize">{selectedUser.status}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                            <Phone className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                            <Video className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </div>
                </header>

                {/* Chat Messages */}
                <ScrollArea
                    className="flex-1 p-6 z-10"
                >
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <span className="text-[10px] uppercase font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full tracking-widest">Today</span>
                        </div>

                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex items-end gap-3 animate-fade-in",
                                    msg.senderId === 0 ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <Avatar className="w-8 h-8 mb-1">
                                    <AvatarImage src={msg.senderId === 0 ? "https://ui-avatars.com/api/?name=Dimple+S" : selectedUser.avatar} />
                                    <AvatarFallback>{msg.senderId === 0 ? "DS" : selectedUser.name[0]}</AvatarFallback>
                                </Avatar>

                                <div className={cn(
                                    "max-w-[70%] space-y-1",
                                    msg.senderId === 0 ? "items-end text-right" : "items-start text-left"
                                )}>
                                    <div className={cn(
                                        "p-4 rounded-3xl text-sm shadow-xl",
                                        msg.senderId === 0
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-white/10 text-gray-200 border border-white/5 rounded-bl-none"
                                    )}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium px-1">{msg.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Chat Input */}
                <div className="p-6 z-10">
                    <form
                        onSubmit={handleSendMessage}
                        className="flex items-center gap-3 glass p-2 pl-4 rounded-3xl border-white/10"
                    >
                        <div className="flex items-center gap-1">
                            <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-2xl">
                                <Plus className="w-5 h-5" />
                            </Button>
                            <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-2xl">
                                <ImageIcon className="w-5 h-5" />
                            </Button>
                        </div>

                        <Input
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-transparent border-none text-white focus-visible:ring-0 placeholder:text-gray-500"
                        />

                        <div className="flex items-center gap-1 pr-2">
                            <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-2xl">
                                <Smile className="w-5 h-5" />
                            </Button>
                            <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-2xl">
                                <Mic className="w-5 h-5" />
                            </Button>
                            <Button
                                type="submit"
                                size="icon"
                                className="w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-110 active:scale-95"
                            >
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
