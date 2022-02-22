import { IonCard, IonCol, IonGrid, IonLabel, IonRow, IonText } from '@ionic/react';
import React from 'react';

import './Tab.css';

const TabChefSteps: React.FC<{}> = () => {
    return(
        <IonGrid>
            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/fried_chicken.jpg" className="card-img-circle" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-iii">
                                <h6>Can't-F***-It-Up Fried Chicken</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-iii">
                                <p>CHEFSTEPS.COM</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/sous_vide_chicken_breast.jpg" className="card-img-circle" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-iii">
                                <h6>Sous Vide Chicken Breast</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-iii">
                                <p>CHEFSTEPS.COM</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/smokerless_smoked_chicken.jpg" className="card-img-circle" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-iii">
                                <h6>Smokerless Smoked Chicken</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-iii">
                                <p>CHEFSTEPS.COM</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/korean_fried_chicken.jpg" className="card-img-circle" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-iii">
                                <h6>Ultimate Korean Fried Chicken</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-iii">
                                <p>CHEFSTEPS.COM</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>
        </IonGrid>
    );
};

export default TabChefSteps;