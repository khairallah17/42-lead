"use client"
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";
import { Search } from "lucide-react";
import UseApiCallHook from "@/hooks/apiCallHook";

export default function SearchInput() {

    
    const { searchQuery, setSearchQuery } = UseApiCallHook()

    const setState = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)

    return (
        <Input placeholder="enter login" value={searchQuery} onChange={setState} />
    )

}