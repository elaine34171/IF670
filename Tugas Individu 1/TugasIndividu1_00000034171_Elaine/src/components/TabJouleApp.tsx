import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';

import './Tab.css';

const TabJouleApp: React.FC<{}> = () => {
    return(
        <IonGrid>
            <IonRow>
                <IonText color="medium" class="ion-padding-horizontal">
                    <p>Visual Doneness Guides</p>
                </IonText>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/ultimate_chicken_breast.jpg" className="card-img" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title">
                                <h6>Ultimate Chicken Breast</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle">
                                <p>VISUAL DONENESS GUIDES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/basic_chicken_breast.jpg" className="card-img" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title">
                                <h6>Basic Chicken Breast</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle">
                                <p>VISUAL DONENESS GUIDES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/ultimate_chicken_thighs.jpg" className="card-img" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title">
                                <h6>Ultimate Chicken Thighs</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle">
                                <p>VISUAL DONENESS GUIDES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/fried_chicken.jpg" className="card-img" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title">
                                <h6>Foolproof Fried Chicken</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle">
                                <p>VISUAL DONENESS GUIDES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <img src="assets/photo/grilled_chicken_leg.jpg" className="card-img" />
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title">
                                <h6>Juicy Grilled Chicken Leg</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle">
                                <p>VISUAL DONENESS GUIDES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonText color="medium" class="ion-padding-horizontal">
                    <p>Just Time & Temp</p>
                </IonText>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <IonCard class="orange-circle">
                            <IonText class="ion-text-center">
                                <p className="range-label">RANGE</p>
                                <h6 className="lower-range-label">65&deg;C</h6>
                                <h6 className="upper-range-label">85&deg;C</h6>
                            </IonText>
                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-ii">
                                <h6>Chicken Leg</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-ii">
                                <p>1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <IonCard class="orange-circle">
                            <IonText class="ion-text-center">
                                <p className="range-label">RANGE</p>
                                <h6 className="lower-range-label">65&deg;C</h6>
                                <h6 className="upper-range-label">80&deg;C</h6>
                            </IonText>
                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-ii">
                                <h6>Chicken Breast</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-ii">
                                <p>45 MINUTES - 2 HOURS 15 MINUTES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <IonCard class="orange-circle">
                            <IonText class="ion-text-center">
                                <p className="range-label">RANGE</p>
                                <h6 className="lower-range-label">65&deg;C</h6>
                                <h6 className="upper-range-label">85&deg;C</h6>
                            </IonText>
                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-ii">
                                <h6>Chicken Thigh</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-ii">
                                <p>1 HOUR - 1 HOUR 30 MINUTES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <IonCard class="orange-circle">
                            <IonText class="ion-text-center">
                                <p className="range-label">RANGE</p>
                                <h6 className="lower-range-label">65&deg;C</h6>
                                <h6 className="upper-range-label">85&deg;C</h6>
                            </IonText>
                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-ii">
                                <h6>Chicken Wings</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-ii">
                                <p>1 HOUR - 1 HOUR 15 MINUTES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>

            <IonRow>
                <IonCard class="one-row-card full-width">
                    <IonCol>
                        <IonCard class="orange-circle">
                            <IonText class="ion-text-center">
                                <p className="range-label">RANGE</p>
                                <h6 className="lower-range-label">60&deg;C</h6>
                                <h6 className="upper-range-label">70&deg;C</h6>
                            </IonText>
                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonRow>
                            <IonText color="dark" class="ion-text-left card-title-ii">
                                <h6>Chicken Liver</h6>
                            </IonText>
                        </IonRow>

                        <IonRow class="view-card-icon">
                            <IonText color="medium" class="ion-text-left card-subtitle-ii">
                                <p>1 HOUR - 1 HOUR 30 MINUTES</p>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonCard>
            </IonRow>
        </IonGrid>
    );
};

export default TabJouleApp;