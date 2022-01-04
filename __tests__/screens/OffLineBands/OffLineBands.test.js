import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import OffLineBands from '@/screens/OffLineBands';

describe('tests in OffLineBands Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<OffLineBands />);
  });

  test('renders correctly', () => {
    renderWithTheme(<OffLineBands />);
  });
});
