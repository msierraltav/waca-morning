import { createContext, useContext, useState } from "react";
import { IMap } from "./objects";

export const MapContext = createContext< MapContextType | undefined >(undefined);

export function useMapContext(){
    const mapState = useContext(MapContext);

    if(mapState === undefined) {
        throw new Error('map context must be used with a MapContext.')
    }
    return mapState;
}

export const MapProvider : React.FC<{children: React.ReactNode}> = ({children}) => {

    const [status, setStatus] = useState<IMap>({activeCountry: 'Mexico'});

    const saveMapInfo = (mapInfo : IMap) => {
        setStatus(mapInfo);
    } ;
    
    return(
        <MapContext.Provider value= {{status, saveMapInfo}}>
            {children}
        </MapContext.Provider>
    )
};
