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

export type Comment = {
   __typename?: 'Comment',
  nickname?: Maybe<Scalars['String']>,
  content: Scalars['String'],
  date: Scalars['DateTime'],
};

export type CommentInput = {
  recipeId: Scalars['ID'],
  nickname?: Maybe<Scalars['String']>,
  content: Scalars['String'],
};

export type Conversation = {
   __typename?: 'Conversation',
  id: Scalars['Int'],
  participants: Array<Scalars['JSON']>,
};


export type Email = {
   __typename?: 'Email',
  nickname?: Maybe<Scalars['String']>,
  content: Scalars['String'],
  date: Scalars['DateTime'],
};

export type EmailInput = {
  recipeId: Scalars['ID'],
  nickname?: Maybe<Scalars['String']>,
  content: Scalars['String'],
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
  refreshToken: Scalars['String'],
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
  registerFake: Scalars['Boolean'],
  updateUser: Scalars['Boolean'],
  deleteUser: Scalars['Boolean'],
  push: Scalars['Boolean'],
  createRoom: Room,
  createFakeRoom: Room,
  createPhoto: Photo,
  createFakePhoto: Photo,
  updateRoom: Room,
  updateAllRooms: Scalars['Boolean'],
  deleteAllRooms: Scalars['Boolean'],
  deleteRoom: Scalars['Boolean'],
  deleteAllPhotos: Scalars['Boolean'],
  deletePhoto: Scalars['Boolean'],
  addNewComment: Scalars['Boolean'],
  requestAuthEmail: Scalars['Boolean'],
  sendAuthEmail: Scalars['Boolean'],
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


export type MutationDeleteRoomArgs = {
  id: Scalars['Float']
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Float']
};


export type MutationAddNewCommentArgs = {
  comment: CommentInput
};


export type MutationRequestAuthEmailArgs = {
  message: Scalars['String'],
  email: Scalars['String']
};


export type MutationSendAuthEmailArgs = {
  email: Scalars['String']
};

export type Photo = {
   __typename?: 'Photo',
  id: Scalars['ID'],
  caption: Scalars['String'],
  file: Scalars['String'],
  room: Room,
};

export type PhotoInput = {
  caption: Scalars['String'],
  file: Scalars['String'],
  roomId: Scalars['Float'],
  hostId: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  bye: Scalars['String'],
  users: Array<User>,
  selectUser: User,
  me?: Maybe<User>,
  selectAllPhotos: Array<Photo>,
  selectAllRooms: Array<Room>,
  selectRooms: Array<Room>,
  selectTopRooms: Array<Room>,
  recipe?: Maybe<Recipe>,
};


export type QuerySelectUserArgs = {
  id: Scalars['Float']
};


export type QuerySelectRoomsArgs = {
  take: Scalars['Float'],
  skip: Scalars['Float']
};


export type QueryRecipeArgs = {
  id: Scalars['ID']
};

export type Recipe = {
   __typename?: 'Recipe',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  comments: Array<Comment>,
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
  score: Scalars['Int'],
  address: Scalars['String'],
  guests: Scalars['Int'],
  beds: Scalars['Int'],
  bedrooms: Scalars['Int'],
  baths: Scalars['Int'],
  check_in: Scalars['Int'],
  check_out: Scalars['Int'],
  instant_book: Scalars['Boolean'],
  houseType: Scalars['String'],
  houseRadio: Scalars['String'],
  convenience: Array<Scalars['String']>,
  dates: Array<Scalars['String']>,
  room_type: Scalars['String'],
  post_code: Scalars['String'],
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  photoConnection: Array<Photo>,
  user: User,
};

export type RoomInput = {
  houseType: Scalars['String'],
  houseRadio: Scalars['String'],
  convenience: Array<Scalars['String']>,
  dates: Array<Scalars['String']>,
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  address: Scalars['String'],
  post_code: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  newComments: Comment,
  newEmail: Scalars['JSON'],
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
    & Pick<Room, 'id' | 'name' | 'city' | 'address' | 'description' | 'price' | 'score'>
    & { photoConnection: Array<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'caption' | 'file'>
    )> }
  )> }
);

export type SelectTopRoomsQueryVariables = {};


export type SelectTopRoomsQuery = (
  { __typename?: 'Query' }
  & { selectTopRooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'name' | 'city' | 'address' | 'description' | 'price' | 'score'>
    & { photoConnection: Array<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'caption' | 'file'>
    )> }
  )> }
);

export type SelectAllRoomsQueryVariables = {};


export type SelectAllRoomsQuery = (
  { __typename?: 'Query' }
  & { selectAllRooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'name' | 'description' | 'country' | 'city' | 'price' | 'address'>
    & { photoConnection: Array<(
      { __typename?: 'Photo' }
      & Pick<Photo, 'id' | 'caption' | 'file'>
    )> }
  )> }
);

export type CreateRoomMutationVariables = {
  options: RoomInput
};


export type CreateRoomMutation = (
  { __typename?: 'Mutation' }
  & { createRoom: (
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'houseType' | 'houseRadio' | 'convenience' | 'dates' | 'lat' | 'lng' | 'address' | 'post_code'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'refreshToken'>
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

export type RequestAuthEmailMutationVariables = {
  email: Scalars['String'],
  message: Scalars['String']
};


export type RequestAuthEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestAuthEmail'>
);

export type NewEmailSubscriptionVariables = {};


export type NewEmailSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'newEmail'>
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'avatar' | 'email'>
    & { roomConnection: Array<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'name' | 'description'>
      & { photoConnection: Array<(
        { __typename?: 'Photo' }
        & Pick<Photo, 'id' | 'file' | 'caption'>
      )> }
    )> }
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
    score
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
export const SelectTopRoomsDocument = gql`
    query selectTopRooms {
  selectTopRooms {
    id
    name
    city
    address
    description
    price
    score
    photoConnection {
      id
      caption
      file
    }
  }
}
    `;

    export function useSelectTopRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectTopRoomsQuery, SelectTopRoomsQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectTopRoomsQuery, SelectTopRoomsQueryVariables>(SelectTopRoomsDocument, baseOptions);
    }
      export function useSelectTopRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectTopRoomsQuery, SelectTopRoomsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectTopRoomsQuery, SelectTopRoomsQueryVariables>(SelectTopRoomsDocument, baseOptions);
      }
      
export type SelectTopRoomsQueryHookResult = ReturnType<typeof useSelectTopRoomsQuery>;
export type SelectTopRoomsQueryResult = ApolloReactCommon.QueryResult<SelectTopRoomsQuery, SelectTopRoomsQueryVariables>;
export const SelectAllRoomsDocument = gql`
    query selectAllRooms {
  selectAllRooms {
    id
    name
    description
    country
    city
    price
    address
    photoConnection {
      id
      caption
      file
    }
  }
}
    `;

    export function useSelectAllRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectAllRoomsQuery, SelectAllRoomsQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectAllRoomsQuery, SelectAllRoomsQueryVariables>(SelectAllRoomsDocument, baseOptions);
    }
      export function useSelectAllRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectAllRoomsQuery, SelectAllRoomsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectAllRoomsQuery, SelectAllRoomsQueryVariables>(SelectAllRoomsDocument, baseOptions);
      }
      
export type SelectAllRoomsQueryHookResult = ReturnType<typeof useSelectAllRoomsQuery>;
export type SelectAllRoomsQueryResult = ApolloReactCommon.QueryResult<SelectAllRoomsQuery, SelectAllRoomsQueryVariables>;
export const CreateRoomDocument = gql`
    mutation createRoom($options: RoomInput!) {
  createRoom(options: $options) {
    id
    houseType
    houseRadio
    convenience
    dates
    lat
    lng
    address
    post_code
  }
}
    `;
export type CreateRoomMutationFn = ApolloReactCommon.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

    export function useCreateRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, baseOptions);
    }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = ApolloReactCommon.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
    }
    refreshToken
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
export const RequestAuthEmailDocument = gql`
    mutation RequestAuthEmail($email: String!, $message: String!) {
  requestAuthEmail(email: $email, message: $message)
}
    `;
export type RequestAuthEmailMutationFn = ApolloReactCommon.MutationFunction<RequestAuthEmailMutation, RequestAuthEmailMutationVariables>;

    export function useRequestAuthEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestAuthEmailMutation, RequestAuthEmailMutationVariables>) {
      return ApolloReactHooks.useMutation<RequestAuthEmailMutation, RequestAuthEmailMutationVariables>(RequestAuthEmailDocument, baseOptions);
    }
export type RequestAuthEmailMutationHookResult = ReturnType<typeof useRequestAuthEmailMutation>;
export type RequestAuthEmailMutationResult = ApolloReactCommon.MutationResult<RequestAuthEmailMutation>;
export type RequestAuthEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestAuthEmailMutation, RequestAuthEmailMutationVariables>;
export const NewEmailDocument = gql`
    subscription newEmail {
  newEmail
}
    `;

    export function useNewEmailSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<NewEmailSubscription, NewEmailSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<NewEmailSubscription, NewEmailSubscriptionVariables>(NewEmailDocument, baseOptions);
    }
export type NewEmailSubscriptionHookResult = ReturnType<typeof useNewEmailSubscription>;
export type NewEmailSubscriptionResult = ApolloReactCommon.SubscriptionResult<NewEmailSubscription>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    avatar
    email
    roomConnection {
      id
      name
      description
      photoConnection {
        id
        file
        caption
      }
    }
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