import { cineBody } from "@/app/data/cineBody"
import { cineLens } from "@/app/data/cineLens"

import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

export function RigSelection() {
    return(
        <HorizontalWrapper>
            <VerticalCardWrapper title="Start a Rig" description="Select a camera body bellow" noBack>
                <BodyCommand />
            </VerticalCardWrapper>
        </HorizontalWrapper>
    );
}

function HorizontalWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="flex justify-center w-fit">
                <Separator orientation="vertical" className="hidden" />
                <div className="w-[750px] mx-6">
                    {children}
                </div>
                <Separator orientation="vertical" className="hidden" />
            </div>
        </div>
    );
}

function VerticalCardWrapper({
    children,
    title,
    description,
    noBack,
    noForward,
    disableForward,
}: Readonly<{
    children?: React.ReactNode,
    title : string,
    description : string,
    noBack? : boolean,
    noForward? : boolean,
}> & {
    disableForward? : boolean,
}) {
    return (
        <div className="w-full h-full flex items-center">
            <Card className="w-full" >
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                <CardFooter className="flex justify-between" hidden={noBack || noForward}>
                    <Button variant="outline">Back</Button>
                    <Button disabled={disableForward}>Continue</Button>
                </CardFooter>
                <CardFooter className="flex justify-start" hidden={!noForward}>
                    <Button variant="outline">Back</Button>
                </CardFooter>
                <CardFooter className="flex justify-end" hidden={!noBack}>
                    <Button disabled={disableForward}>Continue</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

function BodyCommand() {

    return (
        <Card className="w-full h-fit py-0 overflow-hidden">
            <Command className="mt-1">
                <CommandInput placeholder="Search a body name or filter by feature or specification..." />
                <CommandList className="max-h-[300px]">
                    <CommandEmpty>No results found. Try Another Search Term</CommandEmpty>
                    <CommandGroup heading="Suggested">
                        {Object.entries(cineBody).map(([name, dataItem]) => (
                            <CommandItem
                                value={name + " " + dataItem.brand + " " + dataItem.format + " " + dataItem.mount}
                                key={name}
                            >
                                <div className="p-1">
                                    <p className="text-base font-mono mb-0.5">@{name}</p>
                                    <div className="flex space-x-4">
                                        <p className="text-sm font-sans p-1 bg-muted rounded-sm">{dataItem.brand.toUpperCase()}</p>
                                        <p className="text-sm font-sans p-1 bg-muted rounded-sm">{dataItem.format.toUpperCase()}</p>
                                        <p className="text-sm font-sans p-1 bg-muted rounded-sm">{dataItem.mount.toUpperCase()} - MOUNT</p>
                                        <p className="text-sm font-sans p-1 bg-muted rounded-sm">{dataItem.shutter[0].toUpperCase()} - {dataItem.shutter[dataItem.shutter.length-1].toUpperCase()} SEC</p>
                                        <p className="text-sm font-sans p-1 bg-muted rounded-sm">ISO {dataItem.iso[0].toUpperCase()} - {dataItem.iso[dataItem.iso.length - 1].toUpperCase()}</p>
                                    </div>
                                </div>
                            </CommandItem>
                            ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </Card>
    );
}