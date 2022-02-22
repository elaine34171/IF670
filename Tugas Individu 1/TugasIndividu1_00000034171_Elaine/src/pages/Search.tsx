import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import { search, closeOutline } from 'ionicons/icons';
import { useState } from 'react';

import TabAll from '../components/TabAll';
import TabChefSteps from '../components/TabChefSteps';
import TabJouleApp from '../components/TabJouleApp';

import './Search.css';

const Search: React.FC = () => {
  const [text, setText] = useState<string>();
  const [selectedTab, setSelectedTab] = useState<'all' | 'jouleApp' | 'chefSteps'>('all');

  const inputChangeHandler = (event: CustomEvent) => {
    selectTabHandler(event.detail.value);
  };

  const selectTabHandler = (selectedTab: 'all' | 'jouleApp' | 'chefSteps') => {
    setSelectedTab(selectedTab);
  };

  const cleanTextInput = () => {
    setText("");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="bg-color-white padding-start-end">
          <IonToolbar class="toolbar-underline">
            <IonButtons slot="start">
              <IonButton disabled={(text && text != "")? false : true} onClick={cleanTextInput}>
                <IonIcon icon={(text && text != "")? closeOutline : search} />
              </IonButton>
            </IonButtons>

            <IonInput class="low-opacity-placeholder" autofocus={true} value={text} placeholder="Search" onIonChange={e => setText(e.detail.value!)}></IonInput>

            <IonButtons slot="end">
              <IonBackButton defaultHref="/home" text="Cancel" icon="" class="text-transform-none" color="medium" />
            </IonButtons>
          </IonToolbar>

          <IonSegment value={selectedTab} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="all"  class="tab-button">
              <IonLabel class="text-transform-none">All</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="jouleApp" class="tab-button">
              <IonLabel class="text-transform-none">Joule App</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="chefSteps" class="tab-button">
              <IonLabel class="text-transform-none">ChefSteps.com</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {
          (text && text != "")?
            selectedTab === 'all'?
              <TabAll/>
            :
              selectedTab === 'jouleApp'?
                <TabJouleApp/>
              :
                <TabChefSteps/>
          :
            <></>
        }
      </IonContent>
    </IonPage>
  );
};

export default Search;
