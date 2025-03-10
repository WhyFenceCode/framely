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

export function SettingSelector({
    data,
    unit,
    lable,
  }: {
    data : string[],
    unit : string,
    lable : string,
  }
){
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<string | null>(
        null
    )

    return(
        <div className="flex items-center space-x-4">
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
                            value={dataItem + unit}
                            onSelect={(value) => {
                            setSelectedStatus(
                                data.find((priority) => dataItem === value) ||
                                null
                            )
                            setOpen(false)
                            }}
                        >
                            {dataItem + unit}
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