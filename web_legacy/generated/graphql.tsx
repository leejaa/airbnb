import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};

export type Conversation = {
   __typename?: 'Conversation',
  id: Scalars['Int'],
  participants: Array<Scalars['JSON']>,
};



export type List = {
   __typename?: 'List',
  id: Scalars['Int'],
  name: Scalars['String'],
  user: Scalars['JSON'],
  rooms: Array<Scalars['JSON']>,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Message = {
   __typename?: 'Message',
  id: Scalars['Int'],
  message: Scalars['String'],
  user: User,
  conversation: Conversation,
};

export type Movie = {
   __typename?: 'Movie',
  id: Scalars['Int'],
  title: Scalars['String'],
  minutes: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  login: LoginResponse,
  register: Scalars['Boolean'],
  updateUser: Scalars['Boolean'],
  deleteUser: Scalars['Boolean'],
  push: Scalars['Boolean'],
  createRoom: Room,
  createPhoto: Photo,
  updateRoom: Room,
  deleteRoom: Scalars['Boolean'],
  deletePhoto: Scalars['Boolean'],
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  name?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float'],
  input: UserInput
};


export type MutationCreateRoomArgs = {
  options: RoomInput
};


export type MutationCreatePhotoArgs = {
  options: PhotoInput
};


export type MutationUpdateRoomArgs = {
  id: Scalars['Float'],
  options: RoomInput
};

export type Photo = {
   __typename?: 'Photo',
  id: Scalars['ID'],
  caption: Scalars['String'],
  file: Scalars['String'],
};

export type PhotoInput = {
  caption: Scalars['String'],
  file: Scalars['String'],
  roomId: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  bye: Scalars['String'],
  users: Array<User>,
  selectUser: User,
  me?: Maybe<User>,
  selectPhotos: Array<Photo>,
  selectRooms: Array<Room>,
};


export type QuerySelectUserArgs = {
  id: Scalars['Float']
};


export type QuerySelectRoomsArgs = {
  take: Scalars['Float'],
  skip: Scalars['Float']
};

export type Reservation = {
   __typename?: 'Reservation',
  id: Scalars['Int'],
  check_in: Scalars['Int'],
  check_out: Scalars['Int'],
  guest: Scalars['JSON'],
  room: Scalars['JSON'],
  in_progress: Scalars['Boolean'],
  is_finished: Scalars['Boolean'],
};

export type Review = {
   __typename?: 'Review',
  id: Scalars['Int'],
  review: Scalars['String'],
  accuracy: Scalars['Int'],
  communication: Scalars['Int'],
  cleanliness: Scalars['Int'],
  location: Scalars['Int'],
  check_in: Scalars['Int'],
  value: Scalars['Int'],
  user: Scalars['JSON'],
  room: Scalars['JSON'],
};

export type Room = {
   __typename?: 'Room',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  country: Scalars['String'],
  city: Scalars['String'],
  price: Scalars['Int'],
  address: Scalars['String'],
  guests: Scalars['Int'],
  beds: Scalars['Int'],
  bedrooms: Scalars['Int'],
  baths: Scalars['Int'],
  check_in: Scalars['Int'],
  check_out: Scalars['Int'],
  instant_book: Scalars['Boolean'],
  room_type: Scalars['String'],
  photoConnection: Array<Photo>,
};

export type RoomInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  city: Scalars['String'],
  price: Scalars['Int'],
  address: Scalars['String'],
  hostId: Scalars['Float'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  name: Scalars['String'],
  password: Scalars['String'],
  avatar: Scalars['String'],
  gender: Scalars['String'],
  birthdate: Scalars['DateTime'],
  language: Scalars['String'],
  currentcy: Scalars['String'],
  superhost: Scalars['Boolean'],
  email_verified: Scalars['Boolean'],
  email_secret: Scalars['String'],
  login_method: Scalars['String'],
  tokenVersion: Scalars['String'],
  roomConnection: Array<Room>,
};

export type UserInput = {
  name: Scalars['String'],
};

export type SelectRoomsQueryVariables = {
  skip: Scalars['Float'],
  take: Scalars['Float']
};


export type SelectRoomsQuery = (
  { __typename?: 'Query' }
  & { selectRooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'name' | 'city' | 'address' | 'description' | 'price'>
    & { photoConnection: Array<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'caption' | 'file'>
    )> }
  )> }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
  )> }
);

export type RegisterMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);


export const SelectRoomsDocument = gql`
    query selectRooms($skip: Float!, $take: Float!) {
  selectRooms(skip: $skip, take: $take) {
    id
    name
    city
    address
    description
    price
    photoConnection {
      id
      caption
      file
    }
  }
}
    `;

    export function useSelectRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectRoomsQuery, SelectRoomsQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectRoomsQuery, SelectRoomsQueryVariables>(SelectRoomsDocument, baseOptions);
    }
      export function useSelectRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectRoomsQuery, SelectRoomsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectRoomsQuery, SelectRoomsQueryVariables>(SelectRoomsDocument, baseOptions);
      }
      
export type SelectRoomsQueryHookResult = ReturnType<typeof useSelectRoomsQuery>;
export type SelectRoomsQueryResult = ApolloReactCommon.QueryResult<SelectRoomsQuery, SelectRoomsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

    export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
      return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
    }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    name
  }
}
    `;

    export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
      return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
    }
      export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
      
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $name: String) {
  register(email: $email, password: $password, name: $name)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

    export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
      return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
    }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
  }
}
    `;

    export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
      return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
    }
      export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
      
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;