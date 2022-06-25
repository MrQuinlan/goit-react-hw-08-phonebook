import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62adab22645d00a28afd8efb.mockapi.io',
    }),
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['contacts'],
        }),

        addContact: builder.mutation({
            query(body) {
                return {
                    url: '/contacts',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['contacts'],
        }),

        removeContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useRemoveContactMutation,
    useAddContactMutation,
} = contactsApi;
