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

import { cineBody } from "@/app/data/cineBody"

import { SettingSelector } from "@/components/settingSelector"

export default function Page() {
    const bodyName = "ilme-fx3"

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
                                            @{cineBody[bodyName].brand} / {bodyName}
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
                                    <div className="w-[275px] space-y-">
                                        <h4 className="text-sm font-semibold mt-2">Setting</h4>
                                        <SettingSelector lable="Shutter Speed" data={cineBody[bodyName].shutter} unit=" sec"/>
                                        <SettingSelector lable="ISO" data={cineBody[bodyName].iso} unit=""/>
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