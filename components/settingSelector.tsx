"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

export function SettingSelector({
    data,
    lable,
  }: {
    data : string[],
    lable : string,
  }
){
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<string | null>(
        null
    )

    return(
        <div className="flex items-center space-x-4 mt-3 w-full justify-end">
            <p className="text-sm text-muted-foreground">{lable}</p>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-start">
                    {selectedStatus ? <>{selectedStatus}</> : <>+ {lable}</>}
                </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="right" align="start">
                <Command>
                    <CommandInput placeholder="Change status..." />
                    <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        {data.map((dataItem) => (
                        <CommandItem
                            key={dataItem}
                            value={dataItem}
                            onSelect={(value) => {
                            setSelectedStatus(
                                data.find((priority) => dataItem === value) ||
                                null
                            )
                            setOpen(false)
                            }}
                        >
                            {dataItem}
                        </CommandItem>
                        ))}
                    </CommandGroup>
                    </CommandList>
                </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export function SettingSelectorWritten({
    lable,
    number,
    placeholder,
  }: {
    lable : string,
    number? : boolean,
    placeholder? : string,
  }
){
    return(
        <div className="flex items-center space-x-4 mt-3 w-full justify-end">
            <p className="text-sm text-muted-foreground">{lable}</p>
            <Input type={number? "number" : "text"} placeholder={placeholder} className="w-37" />
        </div>
    );
}