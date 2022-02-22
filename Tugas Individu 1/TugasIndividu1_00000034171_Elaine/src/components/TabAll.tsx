import { IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';

import TabJouleApp from './TabJouleApp';
import TabChefSteps from './TabChefSteps';

const TabAll: React.FC<{}> = () => {
    return(
        <>
            <TabJouleApp/>
            
            <IonGrid>
                <IonRow>
                    <IonText color="medium" class="ion-padding-horizontal">
                        <p>ChefSteps.com Results</p>
                    </IonText>
                </IonRow>
            </IonGrid>

            <TabChefSteps/>
        </>
    );
};

export default TabAll;