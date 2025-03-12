export const cineBody: Record<string, { brand: string; externalLense: boolean; mount: string; format: string; shutter: string[]; iso: string[]; }> = {
// SONY: FX Line - Hand Created
    "ilme-fx3": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: ["1/8000","1/6400","1/5000","1/4000","1/3200","1/2500","1/2000","1/1600","1/1250","1/1000","1/800","1/640","1/500","1/400","1/320","1/250","1/200","1/160","1/125","1/100","1/80","1/60","1/50","1/40","1/30","1/25","1/20","1/15","1/13","1/10","1/8","1/6","1/5","1/4"],
        iso: [
            "80", "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000",
            "102400", "128000", "160000", "204800", "256000", "320000", "409600"
        ],
    },
    "ilme-fx30": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: ["1/8000","1/6400","1/5000","1/4000","1/3200","1/2500","1/2000","1/1600","1/1250","1/1000","1/800","1/640","1/500","1/400","1/320","1/250","1/200","1/160","1/125","1/100","1/80","1/60","1/50","1/40","1/30","1/25","1/20","1/15","1/13","1/10","1/8","1/6","1/5","1/4"],
        iso: [
            "80", "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000",
            "102400", "128000", "160000", "204800", "256000", "320000", "409600"
        ],
    },
    "ilme-fx6": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1"
        ],
        iso: [
            "40", "50", "64", "80", "100", "125", "160", "200", "250", "320",
            "400", "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200",
            "4000", "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000",
            "40000", "51200", "64000", "80000", "102400", "128000", "160000", "204800", "256000", "320000",
            "409600"
        ],
    },
    "pxw-fx9": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1"
        ],
        iso: [
            "320", "400", "500", "640", "800", "1000", "1250", "1600", "2000", "2500",
            "3200", "4000", "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600",
            "32000", "40000", "50000", "64000", "80000", "102400"
        ],
    },
    // SONY: Remainaing ICLE Cameras - AI Generated
    "ilce-9m3": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000",
            "102400", "204800"
        ],
    },
    "ilce-7cr": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000",
            "102400"
        ],
    },
    "ilce-7cm2": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000",
            "102400", "204800"
        ],
    },
    "ilce-7rm5": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1", 
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "ilce-7m4": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "ilce-1": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/32000", "1/25000", "1/20000", "1/16000", "1/12500", "1/10000", "1/8000", "1/6400", "1/5000", "1/4000",
            "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500", "1/400",
            "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50", "1/40",
            "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5", "1/4",
            "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "ilce-7c": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400", "204800"
        ],
    },
    "ilce-7sm3": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "40", "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400", "128000", "160000", "204800", "256000", "320000", "409600"
        ],
    },
    "ilce-7rm4a": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "ilce-7m3": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "ilce-7rm3": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "50", "64", "80", "100", "125", "160", "200", "250", "320", "400",
            "500", "640", "800", "1000", "1250", "1600", "2000", "2500", "3200", "4000",
            "5000", "6400", "8000", "10000", "12800", "16000", "20000", "25600", "32000", "40000",
            "51200", "64000", "80000", "102400"
        ],
    },
    "zv-e10m2": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "ilce-6700": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "zv-e10": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "ilce-6600": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "ilce-6100": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "ilce-6400": {
        brand: "sony",
        externalLense: true,
        mount: "e",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    // Canon: EOS - AI Generated
    "eos-r50": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "eos-r10": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "eos-r6": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000"
        ],
    },
    "eos-r6ii": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000"
        ],
    },
    "eos-r100": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "aps-c",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
    "eos-r5": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000"
        ],
    },
    "eos-r5ii": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000"
        ],
    },
    "eos-r8": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/8000", "1/6400", "1/5000", "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000",
            "1/800", "1/640", "1/500", "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100",
            "1/80", "1/60", "1/50", "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10",
            "1/8", "1/6", "1/5", "1/4"
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000", "40000", "51200", "64000", "80000"
        ],
    },
    "eos-r": {
        brand: "canon",
        externalLense: true,
        mount: "rf",
        format: "full-frame",
        shutter: [
            "1/4000", "1/3200", "1/2500", "1/2000", "1/1600", "1/1250", "1/1000", "1/800", "1/640", "1/500",
            "1/400", "1/320", "1/250", "1/200", "1/160", "1/125", "1/100", "1/80", "1/60", "1/50",
            "1/40", "1/30", "1/25", "1/20", "1/15", "1/13", "1/10", "1/8", "1/6", "1/5",
            "1/4", "1/3", "1/2.5", "1/2", "1/1.6", "1/1.3", "1",
        ],
        iso: [
            "100", "125", "160", "200", "250", "320", "400", "500", "640", "800",
            "1000", "1250", "1600", "2000", "2500", "3200", "4000", "5000", "6400", "8000",
            "10000", "12800", "16000", "20000", "25600", "32000"
        ],
    },
}