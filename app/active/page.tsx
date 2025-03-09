"use client"

import * as React from "react"
import Link from "next/link"

import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
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

type FocalLength = {
    value: string
    label: string
}

const statuses: FocalLength[] = [
    {
      value: "18",
      label: "18mm",
    },
    {
      value: "24",
      label: "24mm",
    },
    {
      value: "36",
      label: "36mm",
    },
    {
      value: "42",
      label: "42mm",
    },
    {
      value: "54",
      label: "54mm",
    },
  ]

export default function Page() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<FocalLength | null>(
        null
    )

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-16 px-4 flex flex-row items-center justify-center">
                <Button asChild size="icon" variant="outline">
                    <Link href="/"><ChevronLeft /></Link>
                </Button>
                <div className="grow mx-8">
                    <Progress value={33} />
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-bold">8 of 23</p>
                </div>
            </div>
            <div className="grow p-8">
                <Card className="w-full h-full">
                    <CardHeader>
                        <CardTitle className="text-xl">Shot Name (AKA Train Leaves)</CardTitle>
                        <CardDescription>Shot Location (AKA Brodway City Hall Canada Line Station)</CardDescription>
                    </CardHeader>
                    <CardContent className="flex grow grid w-full grid-cols-2 gap-x-8">
                        <Tabs defaultValue="map">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="story">Storyboard</TabsTrigger>
                                <TabsTrigger value="map">Map</TabsTrigger>
                            </TabsList>
                            <TabsContent value="story">
                                <Card className="h-full">

                                </Card>
                            </TabsContent>
                            <TabsContent value="map">
                                <Card className="h-full">

                                </Card>
                            </TabsContent>
                        </Tabs>
                        <Tabs defaultValue="equipment">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="equipment">
                                <div className="h-full flex items-center justify-center">
                                    <div className="w-[350px] space-y-2">
                                        <h4 className="text-sm font-semibold px-4 mt-2">Body</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @sony / fx-3
                                        </div>
                                        <h4 className="text-sm font-semibold px-4 mt-2">Lense</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @sony / full-frame 18-55mm
                                        </div>
                                        {/* The Extra Equipment Section is Generated as Needed */}
                                        <h4 className="text-sm font-semibold px-4 mt-2">Other Equipment</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @dji / ronin rs-3
                                        </div>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @k&f concept / neutral density
                                        </div>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @smallrig / micro matte box
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="settings">
                                <div className="h-full flex items-center justify-center">
                                    <div className="w-[250px] space-y-2">
                                        <h4 className="text-sm font-semibold mt-2">Setting</h4>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm text-muted-foreground">Focal Length</p>
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                <Button variant="outline" className="w-[150px] justify-start">
                                                    {selectedStatus ? <>{selectedStatus.label}</> : <>+ Focal Length</>}
                                                </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="p-0" side="right" align="start">
                                                <Command>
                                                    <CommandInput placeholder="Change status..." />
                                                    <CommandList>
                                                    <CommandEmpty>No results found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {statuses.map((status) => (
                                                        <CommandItem
                                                            key={status.value}
                                                            value={status.value}
                                                            onSelect={(value) => {
                                                            setSelectedStatus(
                                                                statuses.find((priority) => priority.value === value) ||
                                                                null
                                                            )
                                                            setOpen(false)
                                                            }}
                                                        >
                                                            {status.label}
                                                        </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button size="lg" variant="outline">Previous</Button>
                        <Button size="lg">Continue</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}