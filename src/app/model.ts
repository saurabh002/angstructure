export interface Person {
    id: number,
    name: string,
    address: string,
    phone: string,
    email: string
}


export interface country{
    name: string
    isoCode:string
}

export interface state{
    name: string
    isoCode:string
    countryCode: string
    latitude: string
    longitude: string
}

export interface city{
    name: string
    countryCode:string
    stateCode:string
    latitude: string
    longitude: string
}

export interface weatherReport{
      "main": main,
      "weather": weatherMain[],
      "sys": weatherTime
}

export interface weatherMain{
    "main": string,
    "description": string,
    "icon": string
}
export interface main{
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number
}

export interface weatherTime{
      "sunrise": number,
      "sunset": number
}
