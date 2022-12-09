
import { DefaultInform , ReserInform , TimeInform , MapInform , PhotoInform } from "./_atomic/root";

export default function UserInfoSection() {
    return (
        
        <section className="use_info_sec">
            <div className="com_in">
                
                <DefaultInform/>

                <ReserInform/>
                
                <TimeInform/>
                
                <MapInform/>
                
                <PhotoInform/>
                
            </div>
        </section>
    )
     
}