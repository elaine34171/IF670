import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import { search, copyOutline, qrCodeOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>

          <IonButtons slot="end" class="ion-padding-horizontal">
            <IonButton fill="clear" color="dark" href="search" class="text-transform-none">
              Search
              <IonIcon slot="end" icon={search} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton class="fab">
            <IonIcon color="dark" icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton class="fab wide-fab">
            <h5>Search for Joule</h5>
          </IonFabButton>
        </IonFab>

        <div className="position-relative">
          <IonImg src="assets/photo/home.jpg" class="full-width" />

          <IonGrid>
            <IonRow>
              <IonCol class="position-absolute-bottom-left">
                <IonText color="light" class="ion-text-start"><h1><b>Get your Joule. Be happy.</b></h1></IonText>
              </IonCol>

              <IonCol class="position-absolute-bottom-right">
                <IonText color="light" class="ion-text-end"><p><a className="white-hyperlink" href="https://www.chefsteps.com/joule?utm_source=jouleApp&utm_medium=appBanner&utm_campaign=initial">Explore</a></p></IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonGrid>
          <IonRow class="full-width">
            <IonText color="medium" class="ion-text-center full-width">
              <div className="divider-line">
                <span className="divider-line-title">
                  Search by Type 
                </span>
              </div>
            </IonText>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/pork.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Pork</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/game.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Game</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/beef.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Beef</p>
                </IonText>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/poultry.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Poultry</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/lamb.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Lamb</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/seafood.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Seafood</p>
                </IonText>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/vegetables.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Vegetable</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/desserts.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Desserts</p>
                </IonText>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard color="light" class="three-col-card">
                <IonImg src="assets/icon/home/other.png" class="ion-card-img-small" />
                <IonText color="dark" class="ion-text-center">
                  <p>Other</p>
                </IonText>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow class="full-width">
            <IonText color="medium" class="ion-text-center full-width">
              <div className="divider-line">
                <span className="divider-line-title">
                  Cooking Guides
                </span>
              </div>
            </IonText>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/venison_loin_roast.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Welcome Guides: Hello UK Cooks &#58640;</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/roast_beef_silverside.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Sunday Roast Centerpieces &#58640;</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/beluga_lentils.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Batch Cook Like a Pro</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/basic_salmon.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Quick & Easy</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/red_bbq_chicken.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Guide Boosts</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/egg_bites.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>Cook in a Jar&#8212;No Bag Required!</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard color="light" class="one-row-card full-width">
              <IonCol>
                <img src="assets/photo/pork_chop.jpg" className="card-img" />
              </IonCol>

              <IonCol>
                <IonRow>
                  <IonText color="dark" class="ion-text-left card-title">
                    <h5>All the Guides &#58640;</h5>
                  </IonText>
                </IonRow>

                <IonRow class="view-card-icon">
                  <IonIcon icon={copyOutline} />
                </IonRow>
              </IonCol>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
