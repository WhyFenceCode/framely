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
import { cineLens } from "@/app/data/cineLens"

import { SettingSelector, SettingSelectorWritten } from "@/components/settingSelector"

export default function Page() {
    const bodyName = "ilme-fx3"
    const lensName = "sel-18135"

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
                                        <h4 className="text-sm font-semibold px-4 mt-2">Lens</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @{cineLens[lensName].brand} / {cineLens[lensName].focalRange[0]+"-"+cineLens[lensName].focalRange[1]} {"f"+cineLens[lensName].aperture[0]+"-"+cineLens[lensName].aperture[cineLens[lensName].aperture.length-1]} {cineLens[lensName].format}
                                        </div>
                                        {/* The Extra Equipment Section is Generated as Needed */}
                                        <h4 className="text-sm font-semibold px-4 mt-2">Stabilizer</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @dji / ronin rs-3
                                        </div>
                                        <h4 className="text-sm font-semibold px-4 mt-2">Filters</h4>
                                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm mb-2">
                                            @k&f concept / neutral density
                                        </div>
                                        <h4 className="text-sm font-semibold px-4 mt-2">Other Equipment</h4>
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
                                        <SettingSelector lable="Shutter Speed" data={cineBody[bodyName].shutter} />
                                        <SettingSelector lable="ISO" data={cineBody[bodyName].iso} />
                                        <SettingSelector lable="Aperture" data={cineLens[lensName].aperture} />
                                        <SettingSelectorWritten lable="Focal Length" number placeholder={"EX: " + cineLens[lensName].focalRange[0].toString()} />
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