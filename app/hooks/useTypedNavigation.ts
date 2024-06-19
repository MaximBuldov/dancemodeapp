import { NavigationProp, useNavigation } from '@react-navigation/native';

import { TypeRootStackParamList } from '@/models';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamList>>();
