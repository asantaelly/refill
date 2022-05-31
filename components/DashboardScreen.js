import { React } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import DashboardTabs from './DashboardTabs';


export default function DashboardScreen() {

    return (
        <>
            <DashboardTabs />
        </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e7ecef',
      alignItems: 'center',
      paddingVertical: 20
    }
  })