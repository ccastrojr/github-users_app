import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   flex: 1;
   padding: 20px 30px 30px 30px;
`;

export const Header = styled.View`
   align-items: center;
   padding-bottom: 20px;
   border-bottom-width: 1px;
   border-color: #eee;
`;

export const Avatar = styled.Image`
   width: 100px;
   height: 100px;
   border-radius: 50px;
   background: #eee;
`;

export const Name = styled.Text`
   font-size: 22px;
   color: #333;
   font-weight: bold;
   margin-top: 10px;
   text-align: center;
`;

export const Bio = styled.Text`
   font-size: 14px;
   line-height: 18px;
   color: #999;
   margin-top: 5px;
   text-align: center;
`;

export const Stars = styled.FlatList.attrs({
   showsVerticalScrollIndicator: false,
})`
   margin-top: 20px;
`;

export const Starred = styled(RectButton)`
   align-items: center;
   margin-bottom: 20px;
   padding: 10px 15px;
   background: #f5f5f5;
   border-radius: 6px;
   flex-direction: row;
`;

export const OwnerAvatar = styled.Image`
   width: 50px;
   height: 50px;
   border-radius: 25px;
   background: #eee;
`;

export const Info = styled.View`
   flex-direction: column;
   flex: 1;
   margin-left: 10px;
   color: #333;
   font-size: 14px;
`;

export const Title = styled.Text.attrs({
   numberOfLine: 1,
})`
   font-size: 15px;
   font-weight: bold;
   color: #333;
`;

export const Author = styled.Text`
   font-size: 13px;
   color: #666;
   margin-top: 2px;
`;

export const Loading = styled(ActivityIndicator).attrs({
   size: 'large',
   color: '#1565c0',
})`
   flex: 1;
   margin-top: 20px;
   justify-content: center;
   align-items: center;
`;
