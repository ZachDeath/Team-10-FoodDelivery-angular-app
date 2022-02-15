PGDMP     &        	            z            postgres    13.5    13.2 x    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    14041    postgres    DATABASE     \   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF8';
    DROP DATABASE postgres;
                cloudsqlsuperuser    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   cloudsqlsuperuser    false    3767            �           0    0    SCHEMA public    ACL     �   REVOKE ALL ON SCHEMA public FROM cloudsqladmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO cloudsqlsuperuser;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   cloudsqlsuperuser    false    3            �            1255    16841    audit_employees()    FUNCTION       CREATE FUNCTION public.audit_employees() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	INSERT INTO deleted_employees
	VALUES(OLD.employee_id,OLD.first_name,OLD.last_name,OLD.date_of_birth, OLD.email_address, OLD.phone_number,OLD.password, now());
	RETURN OLD;
END;
$$;
 (   DROP FUNCTION public.audit_employees();
       public          postgres    false            �            1255    16466    audit_menu()    FUNCTION     �   CREATE FUNCTION public.audit_menu() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	
	INSERT INTO deleted_menu
	VALUES(now(),OLD.food_id,OLD.title,OLD.description,OLD.picture_url, OLD.food_type);
	RETURN OLD;
END;
$$;
 #   DROP FUNCTION public.audit_menu();
       public          postgres    false            �            1255    16827    audit_messages()    FUNCTION     �   CREATE FUNCTION public.audit_messages() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	INSERT INTO deleted_messages
	VALUES(OLD.message_id,OLD.email_address,OLD.first_name,OLD.last_name, OLD.message, OLD.user_id, now());
	RETURN OLD;
END;
$$;
 '   DROP FUNCTION public.audit_messages();
       public          postgres    false            �            1255    16467    audit_user()    FUNCTION       CREATE FUNCTION public.audit_user() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	INSERT INTO deleted_users
	VALUES(now(),OLD.user_id,OLD.first_name,OLD.last_name,OLD.date_of_birth, OLD.email_address, OLD.phone_number, OLD.password);
	RETURN OLD;
END;
$$;
 #   DROP FUNCTION public.audit_user();
       public          postgres    false            �            1259    16879    address    TABLE     <  CREATE TABLE public.address (
    user_id integer NOT NULL,
    first_name character varying(60),
    last_name character varying(60),
    first_line character varying(60),
    second_line character varying(60),
    city character varying(60),
    state character varying(60),
    post_code character varying(60)
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16877    address_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.address_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.address_user_id_seq;
       public          postgres    false    222            �           0    0    address_user_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.address_user_id_seq OWNED BY public.address.user_id;
          public          postgres    false    221            �            1259    16999    basket    TABLE     q   CREATE TABLE public.basket (
    user_id integer NOT NULL,
    food_id integer NOT NULL,
    quantity integer
);
    DROP TABLE public.basket;
       public         heap    postgres    false            �            1259    16997    basket_food_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_food_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.basket_food_id_seq;
       public          postgres    false    225            �           0    0    basket_food_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.basket_food_id_seq OWNED BY public.basket.food_id;
          public          postgres    false    224            �            1259    16995    basket_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.basket_user_id_seq;
       public          postgres    false    225            �           0    0    basket_user_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.basket_user_id_seq OWNED BY public.basket.user_id;
          public          postgres    false    223            �            1259    16854    card_details    TABLE     �   CREATE TABLE public.card_details (
    user_id integer NOT NULL,
    payment_type integer NOT NULL,
    long_card_number character varying(16),
    vcc character varying(3),
    expiry_month character varying(2),
    expiry_year character varying(4)
);
     DROP TABLE public.card_details;
       public         heap    postgres    false            �            1259    16832    deleted_employees    TABLE     +  CREATE TABLE public.deleted_employees (
    employee_id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    date_of_birth date,
    email_address character varying(50),
    phone_number text,
    password character varying(50),
    deletion_date date
);
 %   DROP TABLE public.deleted_employees;
       public         heap    postgres    false            �            1259    16830 !   deleted_employees_employee_id_seq    SEQUENCE     �   CREATE SEQUENCE public.deleted_employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.deleted_employees_employee_id_seq;
       public          postgres    false    219            �           0    0 !   deleted_employees_employee_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.deleted_employees_employee_id_seq OWNED BY public.deleted_employees.employee_id;
          public          postgres    false    218            �            1259    16480    deleted_menu    TABLE     �   CREATE TABLE public.deleted_menu (
    date_deleted date,
    food_id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(100) NOT NULL,
    picture_url character varying(200) NOT NULL,
    food_type integer
);
     DROP TABLE public.deleted_menu;
       public         heap    postgres    false            �            1259    16483    deleted_menu_food_id_seq    SEQUENCE     �   CREATE SEQUENCE public.deleted_menu_food_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.deleted_menu_food_id_seq;
       public          postgres    false    200            �           0    0    deleted_menu_food_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.deleted_menu_food_id_seq OWNED BY public.deleted_menu.food_id;
          public          postgres    false    201            �            1259    16811    deleted_messages    TABLE       CREATE TABLE public.deleted_messages (
    message_id integer NOT NULL,
    email_address character varying(255),
    first_name character varying(50),
    last_name character varying(50),
    message character varying(200),
    user_id integer,
    date date
);
 $   DROP TABLE public.deleted_messages;
       public         heap    postgres    false            �            1259    16809    deleted_messages_message_id_seq    SEQUENCE     �   CREATE SEQUENCE public.deleted_messages_message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.deleted_messages_message_id_seq;
       public          postgres    false    217            �           0    0    deleted_messages_message_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.deleted_messages_message_id_seq OWNED BY public.deleted_messages.message_id;
          public          postgres    false    216            �            1259    16485    deleted_users    TABLE     X  CREATE TABLE public.deleted_users (
    time_deleted date,
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    date_of_birth date NOT NULL,
    email_address character varying(50) NOT NULL,
    phone_number text NOT NULL,
    password character varying(50) NOT NULL
);
 !   DROP TABLE public.deleted_users;
       public         heap    postgres    false            �            1259    16491    deleted_users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.deleted_users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.deleted_users_user_id_seq;
       public          postgres    false    202            �           0    0    deleted_users_user_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.deleted_users_user_id_seq OWNED BY public.deleted_users.user_id;
          public          postgres    false    203            �            1259    16493 	   employees    TABLE     A  CREATE TABLE public.employees (
    employee_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    date_of_birth date NOT NULL,
    email_address character varying(50) NOT NULL,
    phone_number text NOT NULL,
    password character varying(50) NOT NULL
);
    DROP TABLE public.employees;
       public         heap    postgres    false            �            1259    16506    employees_employee_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.employees_employee_id_seq;
       public          postgres    false    204            �           0    0    employees_employee_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.employees_employee_id_seq OWNED BY public.employees.employee_id;
          public          postgres    false    205            �            1259    16508    list_employees    VIEW     �   CREATE VIEW public.list_employees AS
 SELECT employees.employee_id,
    employees.first_name,
    employees.last_name,
    employees.date_of_birth,
    employees.email_address,
    employees.phone_number,
    employees.password
   FROM public.employees;
 !   DROP VIEW public.list_employees;
       public          postgres    false    204    204    204    204    204    204    204            �            1259    16512    menu    TABLE     �   CREATE TABLE public.menu (
    food_id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(100) NOT NULL,
    picture_url character varying(200) NOT NULL,
    food_type integer,
    unitprice double precision
);
    DROP TABLE public.menu;
       public         heap    postgres    false            �            1259    16689    menu_auto_increment    SEQUENCE     |   CREATE SEQUENCE public.menu_auto_increment
    START WITH 9
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.menu_auto_increment;
       public          postgres    false    207            �           0    0    menu_auto_increment    SEQUENCE OWNED BY     H   ALTER SEQUENCE public.menu_auto_increment OWNED BY public.menu.food_id;
          public          postgres    false    213            �            1259    16515    menu_food_id_seq    SEQUENCE     �   CREATE SEQUENCE public.menu_food_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.menu_food_id_seq;
       public          postgres    false    207            �           0    0    menu_food_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.menu_food_id_seq OWNED BY public.menu.food_id;
          public          postgres    false    208            �            1259    16753    messages    TABLE       CREATE TABLE public.messages (
    message_id integer NOT NULL,
    email_address character varying(255) NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    message character varying(200) NOT NULL,
    user_id integer
);
    DROP TABLE public.messages;
       public         heap    postgres    false            �            1259    16751    messages_message_id_seq    SEQUENCE     �   CREATE SEQUENCE public.messages_message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.messages_message_id_seq;
       public          postgres    false    215            �           0    0    messages_message_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.messages_message_id_seq OWNED BY public.messages.message_id;
          public          postgres    false    214            �            1259    17130    order_details    TABLE     y   CREATE TABLE public.order_details (
    order_id integer NOT NULL,
    food_id integer NOT NULL,
    quantity integer
);
 !   DROP TABLE public.order_details;
       public         heap    postgres    false            �            1259    17161    orders    TABLE     �   CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer,
    employee_id integer,
    order_date character varying(40)
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    17159    orders_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    228            �           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    227            �            1259    16540    users    TABLE     9  CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    date_of_birth date NOT NULL,
    email_address character varying(50) NOT NULL,
    phone_number text NOT NULL,
    password character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16560    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    209            �           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    210            �            1259    16562 	   view_menu    VIEW     �   CREATE VIEW public.view_menu AS
 SELECT menu.food_id,
    menu.title,
    menu.description,
    menu.picture_url,
    menu.food_type
   FROM public.menu;
    DROP VIEW public.view_menu;
       public          postgres    false    207    207    207    207    207            �            1259    17177 	   view_name    VIEW     �   CREATE VIEW public.view_name AS
 SELECT menu.title,
    count(*) AS count
   FROM (public.menu
     JOIN public.order_details USING (food_id))
  GROUP BY menu.title;
    DROP VIEW public.view_name;
       public          postgres    false    226    207    207            �            1259    16570 
   view_users    VIEW     �   CREATE VIEW public.view_users AS
 SELECT users.user_id,
    users.first_name,
    users.last_name,
    users.date_of_birth,
    users.email_address,
    users.phone_number,
    users.password
   FROM public.users;
    DROP VIEW public.view_users;
       public          postgres    false    209    209    209    209    209    209    209            �           2604    16882    address user_id    DEFAULT     r   ALTER TABLE ONLY public.address ALTER COLUMN user_id SET DEFAULT nextval('public.address_user_id_seq'::regclass);
 >   ALTER TABLE public.address ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    17002    basket user_id    DEFAULT     p   ALTER TABLE ONLY public.basket ALTER COLUMN user_id SET DEFAULT nextval('public.basket_user_id_seq'::regclass);
 =   ALTER TABLE public.basket ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    223    225    225            �           2604    17003    basket food_id    DEFAULT     p   ALTER TABLE ONLY public.basket ALTER COLUMN food_id SET DEFAULT nextval('public.basket_food_id_seq'::regclass);
 =   ALTER TABLE public.basket ALTER COLUMN food_id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16835    deleted_employees employee_id    DEFAULT     �   ALTER TABLE ONLY public.deleted_employees ALTER COLUMN employee_id SET DEFAULT nextval('public.deleted_employees_employee_id_seq'::regclass);
 L   ALTER TABLE public.deleted_employees ALTER COLUMN employee_id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16577    deleted_menu food_id    DEFAULT     |   ALTER TABLE ONLY public.deleted_menu ALTER COLUMN food_id SET DEFAULT nextval('public.deleted_menu_food_id_seq'::regclass);
 C   ALTER TABLE public.deleted_menu ALTER COLUMN food_id DROP DEFAULT;
       public          postgres    false    201    200            �           2604    16814    deleted_messages message_id    DEFAULT     �   ALTER TABLE ONLY public.deleted_messages ALTER COLUMN message_id SET DEFAULT nextval('public.deleted_messages_message_id_seq'::regclass);
 J   ALTER TABLE public.deleted_messages ALTER COLUMN message_id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16578    deleted_users user_id    DEFAULT     ~   ALTER TABLE ONLY public.deleted_users ALTER COLUMN user_id SET DEFAULT nextval('public.deleted_users_user_id_seq'::regclass);
 D   ALTER TABLE public.deleted_users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    203    202            �           2604    16579    employees employee_id    DEFAULT     ~   ALTER TABLE ONLY public.employees ALTER COLUMN employee_id SET DEFAULT nextval('public.employees_employee_id_seq'::regclass);
 D   ALTER TABLE public.employees ALTER COLUMN employee_id DROP DEFAULT;
       public          postgres    false    205    204            �           2604    16691    menu food_id    DEFAULT     o   ALTER TABLE ONLY public.menu ALTER COLUMN food_id SET DEFAULT nextval('public.menu_auto_increment'::regclass);
 ;   ALTER TABLE public.menu ALTER COLUMN food_id DROP DEFAULT;
       public          postgres    false    213    207            �           2604    16756    messages message_id    DEFAULT     z   ALTER TABLE ONLY public.messages ALTER COLUMN message_id SET DEFAULT nextval('public.messages_message_id_seq'::regclass);
 B   ALTER TABLE public.messages ALTER COLUMN message_id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    17164    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    16587    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    210    209            �          0    16879    address 
   TABLE DATA           r   COPY public.address (user_id, first_name, last_name, first_line, second_line, city, state, post_code) FROM stdin;
    public          postgres    false    222   ��       �          0    16999    basket 
   TABLE DATA           <   COPY public.basket (user_id, food_id, quantity) FROM stdin;
    public          postgres    false    225   ��       �          0    16854    card_details 
   TABLE DATA           o   COPY public.card_details (user_id, payment_type, long_card_number, vcc, expiry_month, expiry_year) FROM stdin;
    public          postgres    false    220   �       �          0    16832    deleted_employees 
   TABLE DATA           �   COPY public.deleted_employees (employee_id, first_name, last_name, date_of_birth, email_address, phone_number, password, deletion_date) FROM stdin;
    public          postgres    false    219   X�       �          0    16480    deleted_menu 
   TABLE DATA           i   COPY public.deleted_menu (date_deleted, food_id, title, description, picture_url, food_type) FROM stdin;
    public          postgres    false    200   �       �          0    16811    deleted_messages 
   TABLE DATA           t   COPY public.deleted_messages (message_id, email_address, first_name, last_name, message, user_id, date) FROM stdin;
    public          postgres    false    217   ��       �          0    16485    deleted_users 
   TABLE DATA           �   COPY public.deleted_users (time_deleted, user_id, first_name, last_name, date_of_birth, email_address, phone_number, password) FROM stdin;
    public          postgres    false    202   ޚ       �          0    16493 	   employees 
   TABLE DATA           }   COPY public.employees (employee_id, first_name, last_name, date_of_birth, email_address, phone_number, password) FROM stdin;
    public          postgres    false    204   ��       �          0    16512    menu 
   TABLE DATA           ^   COPY public.menu (food_id, title, description, picture_url, food_type, unitprice) FROM stdin;
    public          postgres    false    207   ��       �          0    16753    messages 
   TABLE DATA           f   COPY public.messages (message_id, email_address, first_name, last_name, message, user_id) FROM stdin;
    public          postgres    false    215   x�       �          0    17130    order_details 
   TABLE DATA           D   COPY public.order_details (order_id, food_id, quantity) FROM stdin;
    public          postgres    false    226   9�       �          0    17161    orders 
   TABLE DATA           L   COPY public.orders (order_id, user_id, employee_id, order_date) FROM stdin;
    public          postgres    false    228   ��       �          0    16540    users 
   TABLE DATA           u   COPY public.users (user_id, first_name, last_name, date_of_birth, email_address, phone_number, password) FROM stdin;
    public          postgres    false    209   �       �           0    0    address_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.address_user_id_seq', 4, true);
          public          postgres    false    221            �           0    0    basket_food_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.basket_food_id_seq', 1, false);
          public          postgres    false    224            �           0    0    basket_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.basket_user_id_seq', 2, true);
          public          postgres    false    223            �           0    0 !   deleted_employees_employee_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.deleted_employees_employee_id_seq', 1, false);
          public          postgres    false    218            �           0    0    deleted_menu_food_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.deleted_menu_food_id_seq', 1, false);
          public          postgres    false    201            �           0    0    deleted_messages_message_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.deleted_messages_message_id_seq', 1, false);
          public          postgres    false    216            �           0    0    deleted_users_user_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.deleted_users_user_id_seq', 1, false);
          public          postgres    false    203            �           0    0    employees_employee_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.employees_employee_id_seq', 29, true);
          public          postgres    false    205            �           0    0    menu_auto_increment    SEQUENCE SET     B   SELECT pg_catalog.setval('public.menu_auto_increment', 1, false);
          public          postgres    false    213            �           0    0    menu_food_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.menu_food_id_seq', 1, false);
          public          postgres    false    208            �           0    0    messages_message_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.messages_message_id_seq', 30, true);
          public          postgres    false    214            �           0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 93, true);
          public          postgres    false    227            �           0    0    users_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.users_user_id_seq', 243, true);
          public          postgres    false    210            �           2606    16884    address address_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
       public            postgres    false    222            �           2606    17005    basket basket_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.basket
    ADD CONSTRAINT basket_pkey PRIMARY KEY (user_id, food_id);
 <   ALTER TABLE ONLY public.basket DROP CONSTRAINT basket_pkey;
       public            postgres    false    225    225            �           2606    16858    card_details card_details_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.card_details
    ADD CONSTRAINT card_details_pkey PRIMARY KEY (user_id);
 H   ALTER TABLE ONLY public.card_details DROP CONSTRAINT card_details_pkey;
       public            postgres    false    220            �           2606    16840 (   deleted_employees deleted_employees_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.deleted_employees
    ADD CONSTRAINT deleted_employees_pkey PRIMARY KEY (employee_id);
 R   ALTER TABLE ONLY public.deleted_employees DROP CONSTRAINT deleted_employees_pkey;
       public            postgres    false    219            �           2606    16593    deleted_menu deleted_menu_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.deleted_menu
    ADD CONSTRAINT deleted_menu_pkey PRIMARY KEY (food_id);
 H   ALTER TABLE ONLY public.deleted_menu DROP CONSTRAINT deleted_menu_pkey;
       public            postgres    false    200            �           2606    16819 &   deleted_messages deleted_messages_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.deleted_messages
    ADD CONSTRAINT deleted_messages_pkey PRIMARY KEY (message_id);
 P   ALTER TABLE ONLY public.deleted_messages DROP CONSTRAINT deleted_messages_pkey;
       public            postgres    false    217            �           2606    16595     deleted_users deleted_users_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.deleted_users
    ADD CONSTRAINT deleted_users_pkey PRIMARY KEY (user_id);
 J   ALTER TABLE ONLY public.deleted_users DROP CONSTRAINT deleted_users_pkey;
       public            postgres    false    202            �           2606    17194    employees email_unique 
   CONSTRAINT     Z   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT email_unique UNIQUE (email_address);
 @   ALTER TABLE ONLY public.employees DROP CONSTRAINT email_unique;
       public            postgres    false    204            �           2606    16597    employees employees_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            postgres    false    204            �           2606    16599    menu menu_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (food_id);
 8   ALTER TABLE ONLY public.menu DROP CONSTRAINT menu_pkey;
       public            postgres    false    207                        2606    17134     order_details order_details_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_id, food_id);
 J   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_pkey;
       public            postgres    false    226    226                       2606    17166    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    228            �           2606    17221    users user_email_unique 
   CONSTRAINT     [   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_email_unique UNIQUE (email_address);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT user_email_unique;
       public            postgres    false    209            �           2606    16605    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209            �           2618    16829    messages update_user_id    RULE     �   CREATE RULE update_user_id AS
    ON INSERT TO public.messages DO  UPDATE public.messages SET user_id = users.user_id
   FROM public.users
  WHERE ((messages.email_address)::text = (users.email_address)::text);
 -   DROP RULE update_user_id ON public.messages;
       public          postgres    false    215    215    209    209    215    215                       2620    16843    employees audit_employees    TRIGGER     x   CREATE TRIGGER audit_employees AFTER DELETE ON public.employees FOR EACH ROW EXECUTE FUNCTION public.audit_employees();
 2   DROP TRIGGER audit_employees ON public.employees;
       public          postgres    false    204    233                       2620    16828    messages audit_messages    TRIGGER     u   CREATE TRIGGER audit_messages AFTER DELETE ON public.messages FOR EACH ROW EXECUTE FUNCTION public.audit_messages();
 0   DROP TRIGGER audit_messages ON public.messages;
       public          postgres    false    215    232                       2620    16606    menu save_deleted_items    TRIGGER     r   CREATE TRIGGER save_deleted_items BEFORE DELETE ON public.menu FOR EACH ROW EXECUTE FUNCTION public.audit_menu();
 0   DROP TRIGGER save_deleted_items ON public.menu;
       public          postgres    false    230    207                       2620    16607    users save_deleted_users    TRIGGER     s   CREATE TRIGGER save_deleted_users BEFORE DELETE ON public.users FOR EACH ROW EXECUTE FUNCTION public.audit_user();
 1   DROP TRIGGER save_deleted_users ON public.users;
       public          postgres    false    231    209                       2606    17011    basket basket_food_id_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.basket
    ADD CONSTRAINT basket_food_id_fkey FOREIGN KEY (food_id) REFERENCES public.menu(food_id);
 D   ALTER TABLE ONLY public.basket DROP CONSTRAINT basket_food_id_fkey;
       public          postgres    false    225    3568    207                       2606    17006    basket basket_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.basket
    ADD CONSTRAINT basket_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.basket DROP CONSTRAINT basket_user_id_fkey;
       public          postgres    false    209    225    3572                       2606    17195 &   card_details card_details_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.card_details
    ADD CONSTRAINT card_details_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.card_details DROP CONSTRAINT card_details_user_id_fkey;
       public          postgres    false    3572    220    209                       2606    16820 .   deleted_messages deleted_messages_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.deleted_messages
    ADD CONSTRAINT deleted_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 X   ALTER TABLE ONLY public.deleted_messages DROP CONSTRAINT deleted_messages_user_id_fkey;
       public          postgres    false    3572    209    217                       2606    17224    orders employee_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT employee_fk FOREIGN KEY (employee_id) REFERENCES public.employees(employee_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT employee_fk;
       public          postgres    false    3566    228    204            
           2606    17141    order_details fk_food    FK CONSTRAINT     x   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT fk_food FOREIGN KEY (food_id) REFERENCES public.menu(food_id);
 ?   ALTER TABLE ONLY public.order_details DROP CONSTRAINT fk_food;
       public          postgres    false    3568    207    226                       2606    16910    address fk_user    FK CONSTRAINT     �   ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 9   ALTER TABLE ONLY public.address DROP CONSTRAINT fk_user;
       public          postgres    false    222    209    3572                       2606    17186    messages messages_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE SET DEFAULT;
 H   ALTER TABLE ONLY public.messages DROP CONSTRAINT messages_user_id_fkey;
       public          postgres    false    209    215    3572                       2606    17167    orders order_fk    FK CONSTRAINT     s   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT order_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 9   ALTER TABLE ONLY public.orders DROP CONSTRAINT order_fk;
       public          postgres    false    209    3572    228            	           2606    17212    order_details order_id_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_id_fk FOREIGN KEY (order_id) REFERENCES public.orders(order_id) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_id_fk;
       public          postgres    false    226    228    3586            �   �   x�mN�N�0<���_�j(9Ҁ��&�zY�M�%$ve��qZJA��S��ѪE���X~�=ㅺZbE}�P��0+6�B�_�&ἛV
��ai��)Xd���� _i��ul�SR����Y��O�޺��~����M�L��!�8�����
�-A&��k���dGɷs=K�꾬��@:��1�hF�/5nQ ��խ��ij�a���zp޴�d��S�˛�El.��=�r      �   C   x�-���0�7Sb7�.����_�B��PP+`l:�p��	�i�V�����p[�3��X|/��f      �   b   x�]M��@�.��pw���s��ڤI��a9�����IA��P��(�O��U;��on::�cǻ�޾x�Vpd-�XY3�9G/�#���M""      �   ~  x�]�Oo�0���W)H�m�7�_;(l=�BԎ�4�IA�o?�	R��������*�]�Ц]Md7
7Z�B��(mPC�S�����5�Ab@�8�Veaa'�v���N��F����V��F�c��8��,�/��G�r�"<�/"+�QZpÓ|%Yt�:#����BaD�#|��1�������l�q��S��f�C]��nQ;�~������x�����כ)ڠ�SHy�9q�3ui�C�/���9��M	knL��a3���H�N��{�-9S���1��G팛M�K�]v��c��9R�H��p�E�.?e�,3Ж�2�V.R��������Pjدf&F��p�����~�q9�~=�ZFS��YW��E��       �   �   x�3202�50�56�4�q1�`B��ߗӈ���,n�O�	X��S��	>%f`qSJ@�8�M-.Q(Ȭ�J�,�ͭT(A���끸z��z�ٜ�����%��
iE��
�E�y�`���h�����44������Y� D�
1�c���� ��^�      �   9  x����n�0���S����J��7�vk�a�eC/�E[Ld)����ON�.ɡ;$?�?���z�,�����ʵ�7���n�'�� 8��H!B>.@��|?N6�eOF9;-�ۆ�����Ձ������'����D�&�h{ЭW
O�lC��l��.b���W�3Zx|�>��Z��wH���Ǭ<���֥^(�ٝ������P'�EЮ3J,H`]��+4�Y�IA.�'t�ܪK�j[dsxC3.�mo0���"���K)2)�.Q�l��7�S�=�����'�{5-�*��5�'.۔O�#�-��5��n�X,O��8�H"SM�(�Ex�a~���Ƿ�I��p�z�m��^N�2��5m��r��4�
Po8r
��`XQ��id)�5z��/	�Ћ5�v(+���=o�$�RNa�U��#E��rG�
*P��j��� 29��O�j�K��{�bx<,վ��6d;zB#,�$.�69���1��+
�2��Pm�GIڑ�h��hP���4�d|��9��C��l=G:�S�g�Q��TH��p��-��]\\���Ǆ�Q�e �HoE      �   �  x��Y[s�8�}F~ż�Ö]��h���K�׾�$(�"A$-K��; )���o�j�Ԍӌ���ӧOC�a����F��2��l&�v�3����	(#-�W�i��0�+����\���t���	����?��HD^j��G��'���8��H����0Ҵ�P�K�H��#R����&�#��?��w+�lE� ���`����E9@���z.C�ͣ}�|�{��gs�O�r��>���yP��@����\�9��ɵ��  z΁�Ջ҆�8Z�F�L�I)-=�(�F�dŔ=���g~=��Z*%tFε�4�-K���y�0R�wQ7��-��C�R'�=�g�y��9jɆ<2�e	��6ƅjeOd?�7��_֗o���'7��e)�����ɀw�D�M���x�.伬�$|�H��&��"��E�#l�<e&�h��"5o!�܈�:�nL�{��|���!p(�z=˻��f� NNj%p��J�mJ�1���5kv�4ΊZ*y��"�Q��G!%?���OiY�P}r�Ӆ�ѕ-��uӊvG1v !���ȪB�eʹ�9��o����Z���r�L��9��R�5�@q��7lN滨2Yn�J6C&X� a��>%7-s���m�I��$��
�h��ӛ�F&�M�CЏWR5�Cơk,������6�J����u�,�L^�C�/ƣX���H�q�k��#���<l�v�m5:�KND�$����%���I��!�ļPr^���h	����i(��ߧ/e�g������0sK	Ԙ\'$m�ǲ8)�л��X���3�|~�=/�Q�g#���/d��|o{��=�K��D��Yԫ����hH=�C<�ڗ�ˈ?�,W#DF�J�^4_Z6�0,@��i�$�1'У2GOڣ2ΠaQ v�O����qJ�G)�X�JI&R��M�����b䠏�ch�L9�YG8�Q�7��֛N-����42h����mxFQŤ��E\�-�Z-	=?``��ɫ���#t]r[e�C��!��H��M$��T�^���z瑲*��o�^F��r�E��\e��,�<j3钺�4B.���=?�"�;�Q���u���}��!W�8 �պ6ul'���Ak��y���7�%`1�Pfw�u��5a�`�h[U@�ʬVCӛqE�̆h���f!��aא��A�:���w�/�^�y��/�.7
�t�;ia�=e@��Dhw��sE�u�g��������+$�z](r\C��-s��"���.JE�k)s�v�� ���iVD���}r\(����c��0;{M�듮��0N�=�4��)G!�,$������HO2�h��E��c�9F�a"��kD_#�a�1Z��9���ᜒ�.A�gh8M?�'�����󺞛�/Pr��u�'?V���X�3�T*5�13�i���9z���!Z���k#��q��EG��|��O#Ԉ�ty�!S��C��g�i�rY�}k㈜�������PG�(�G�B2�k����D�,7j�eM�T�Q����hWE��f���9��is��vv���3�K��$��n�����F�WCp���G���<d3y����ɈQyXԙ@���CP;6`�t��(�Ӣ3?�e�"�(H�|���K�f��k>�R2�]�|k�N��֛��m:�G�.T�E[����	#74b�U��3����� ��J�.j��38����q^���G,�6Y���ԡ�|�%6����U5���	H_U˸�Y!>G[B�(�@��<�:������@���]Y1��T�����
k��KCH��4i&'I5RO�8�J���+Z#	�$M���m9dbL]82
��uߺ���0H*�7L��E'M�C{6F���xʯ�T��*���E�;���2�$�¢"ws+��!�b��+�����s1���hu���؏�r����}2�%���R���="s�6�u��Ʌk�������h� )�~�.�ͫ�Qy9��em��S�����9qD�U���Bm�#�k�_�A4SW�6�{[�� #�v�zCN~]����C�ǋ��~�Ka�y���߆{L��c>�SL�w��ߐ��CF��a���*��v�h�`�#挬���>��g�������L3cM�L�R0tuv�s�j<L'�U����q&t+��Z�dk��'�"��}��zԤݶwq�������=I�כ�܇�"}S,A�������ʹ�����V��D~ ���̲�M_���!w�-X��vU�b'B�yX�!��R�E6�}2њhuP}�}z�����C�{T
��0�����Z�#�$M?�m��C�.<�N��!��|v�9#@�B���FA`�w����6}�mgV%��X�|��e�����M>���ͦ��Q���zk�1"+aC�q�T�ӎq��]���T\�_Û6x��ݣ =}�	��ժ�m���V�z	��(�B��Iw�+��d�(t���L
,%XHt/sd�?�E�k����e%0)�����>NA����rϱ\V���bخ��yY @�1�\CI���u S��oGxدK�qcj#s��H�Zۅy��=�A��k��Հ���]70+f�����<��ݨ̓_������f�Wj��������+�"�m�~�7c.��{7�A�`�&V�(sG���3�:�p����:��!	'�q������'"5'^-VV���t�Ѕ󹗗��d���\�a��0~v��@�e���2^�:�Ϣq�TG������:>�O�����ԙܵ��Ae"4��ݲ�(��s�GYoWXҟE�2��YY#{��Sjp��<17N!�u+iVh�λ~���}�6��]����Yf�դY�H��=`�ˬ[�@� 'uhH��_��S�^�u##�uc�S2maQ
�������w8�J��@Kǋ���H�,�����[0��� �B9�r��U$���8������8_��0K���c��o�SH�qW�i����x�t&���uG�У�a�o��-.�z�ד��q&����E��AW��ʜ�0U�E.,:�-#o���4�fchs��U�����Dם��f���>�&�ho�*)��7 ���Y�5���({C�Kc�N�|.t�]9�=Mv�=T��0݂�O��]NV7�l��I�Dz����*�����S�Zd���L�Y��%�=s�������S�>����WS�q���BNa?��Za�x��[��~����q��4�n�4�w\�"L�/�<�a2����I��sx5{wfn㐲jq�|�.X��b�͊�!�����3N�KQ��?��-�n�sy�drk��X%�Y�zXh�ǙF!yz���nQߨ���0Il���V	+[iC�q�UI�V�����O5�V�j�r[ké��ImL���O@T���6+������`���G�b~r�7|=��&Me��o~�c�%aH�Y�w�#�ߢ7��uC�>�$=B����,��$�֐�r�'�$�y��P���%���b4�[jD�gG����sh�H��Se��0Ә�p҆�8M�?	�1���cP�������8w�}�?r]W5�J��:��|=�b�E�_�an�G��k:�@cl��������L���6�h��������l�Ҙkd��w�_��u�_�(�-.L��������ذi�	�����/_K`#2A�ɛ�宩�Ț=;�o(�܀Q�����|����;      �   �   x�e�=O1���/��ZU�b&�b]�^P/�r� �GЃ!"=z����:�p�2�4��+8��~�eՍ ��Z!�R���)�$Q�����@�x�X��u<p�ri�htD�z��Y����$Q�X������0�t��!ձ���L���[�nZ0�1�,��"���,�6���;��O��p����4�e<�ה۪rI�$���,_VJ�/�et      �   �  x���[o�6���_��}(�")���"q�좛 i���(`��Xb-��HE�}���\6ž�ŶF&���9_`+Lxyy����~.E��K��ИPԙ{Ѧ�jsF���h���+�,JUEm�V�Z������Ne�-�0��1���(�G��x0�A�p��������C�uQ��`e��i��,Ԗ��T"�~,f������7-bu���d�.�����3�����B� �R@�c]sWվz�84�:��dRD�ɩ{��"R�jCC��f!-���oA*��4Ҋ�36^���<�h<I�[�@�E�,.y%Uj-eZ^Y�z8��䰔�~l:����J4�L��D�i�.�kKW�zaZ xq�hs��L�����H��dD�1ێG̓��l0n�V��!�	.B�Wf��jMh�Z'�Di��J����黎���"oDE>���"I��ߴ���bq)֐�!H�`ȨǛ�`��6g(�JU���/�ôs"��D��`7�TE���Df�J�U-:����)M��^��Bs��z�dFb���Ĥ�Ox<�N��a~H��Y�ٶ;c�t6�?��%|��޳��ضx׀�{8����x�:���Խ��S_z��~^���Т<Z�M�yBYB����/���9�b2J�v8a�8&�l6�W
�[�gzQ��+*���4�J���pt����$('�x�bΓx�Y����Yp-�o�����C�M:��ڼ��X�&��*�Da抾vHd�gԻ�٬v~�d�瓿��]Sg�6�R��ѹ
G75Ң�HB}�[`@�38ԃ���i���|V�P��g�o�b1Z�;��J��̓?�;����`����(��3�8���io_z��lm#�l|:mv�b���fQ���S ?l�����M6�J�y�Z�������4����s�Ƌ�v�b�N���,]u�Z�������1w�G���_3��      �   �  x�}R=o�0�O��.�ʵ�Nu�%�ХC�,g�$��G�#c����,
�J���޻S[�!��^���I�s�?�2<}��%�Ĩ92��j�n�ة]��{�|fkA��1�!��6����!~_�'�1�V�I���@ �����7�0�(0����[i�A.��<�Mg���fK�r���I�����P:������%a�s�*.��]�u�1&:Zƞ|ٝ��֨�pJ�x������(�	�p�j���'�Su���Pt�v@M\�d�h�{h�-��^S!�J&:$G��6�A�֠�M}�8�!ad�vƊ+�,tJ5]�7�-�
�ER�K�g�I����g��{l:�����b�DG4>�)��BVFe�~�ބ%��pM{��oeZ��Ą�#��2|�uE���l�׶i��a�      �   W   x�-͹�0��(�#YЋ���<�v��@���ㅇ+�6;�q0�����q'�z%�!�	w6$���B�Y"x�����!�K      �   X   x�uι�0��p�p'a���:��+�dc
�v����^Ê�E4R0 �u+M[���-�S�S��W�p�G�?�sW�ʲ%J      �   `  x�mYIs�<�<ÿb�/� ����ny���֎��$(R�"��d�׿H�{��>��%�T�%3��%�R�"Ů芲l����S�49ZEԖE��\juV��8��{�+��y?���|ҽ�P��*%y/�6mj��S�����
V��6���h��#��MĽ{B��l��\�m���R��̚�(ߜ%MEJ=��~�ď��Q����N(��B��(�o�9�{��S����e�lvg��8B�a�S_�d�������#7��kI��}��&A�ʚ��T���ah��t�|�Z���C�� �Jv�������:��I�?ZW�Y�
�ln\���R��/�%�q��'�̛���	�J�R��k���,�uY����S2��z��]|_����9�S-y�����T�����dS���c!�_�o��ϯ^�Tj-Sr��keNŝS'8E��Ԛ�h���=Ru��Hr��A������E ���]]�P�!�J"��r�V��w$ͬi����^�t�tW����%�(��2$��͢\�.&��;���Eˤ �CYd�9��x�tr�m��Z�e3V0}�T1���eI7��v�vxc��:�Ǿ��J��3��yuu��H�*.�>�=j�=�az���&�{�r��J�r�'��\����kj���S�e��C�{��1��t����~<����ܴ�\�r8B�SR'�������tB��ܐ�*W�O�$�GTR�>M����.����u?d���9~H���k�>�W� �j/���yĩ��t�5�"7�ؐ<t\�N��U�����N��}�2q��InN���zD�?�}G ��h�w�����8�	{Uw�VU�\����mP�l��x�R��u'��\�l���cU|ַ��Q���P����G4%H��ԉ*�9�%������b.���qsh��By���5Yf\8iq��Fu,�0��:�Nn7�����]�Yt����Ǝѭ�Pu�M��Wg�2}�V@3bj��p�j�.�Ȳ瑛��M��qp��q�O�K��`�n�1����$�=M���s���8���A��c����T���e�c�^���^�?��9	w|�Ρ��9�a@e�+ ���H(p��UM}�-�{�� �#[����c��/�^P�~=t v�?�ѧ�D�����og!j&\�w~�kz���n�/�� ����/�}�O���ڿ>�<��F���@�9R���FϾ>��e��I�T%��m�4���:`�"��JE$o��&o�fL�>��G�?����:�7w�	�)yTZ�-���\���ʭ��H�LiU'Ǣ�B�PB&��ʯ���P�ѝ+��2���`���h��!E�B�b���	��%��+��_��8t�bc�(��.wt	Q`L41c�����kN в���xv �G^r��InDjC�1y�t��F�h����s��m��Z_�{>|A�4`f���׹F�,���K�DUԷ�kRy�x()���'z��z����c���M7��	�Ƙh�?:A@`x �͛�LM��AC�%I���M��a�=R$?f�D��q-����!ߥT�i�o/�1|����gh��:&���X�4��1Rn����_�� ȃ���4H��&��2�,�ң�?G��h~RLn�k뉧�8�R]�x� C�qЦFÄ$�]Em�w��Y9&�eA耝�R7���55����@zR�)�/C���x4�5p��$ �"9v=w�)0�u5{��ƄC��"]8L�e�5:M-e:i����(��nHx�D��� �I�M�DS��ϸ!ziM��K�	0�� �H��M{
�Qs��)2m�[eX#���%+k�ud�K;�V5�1~>iϯ?w���l~�� Ӡb#�o�N��F@H.)sk�2�JV
,5"�ܡ��v�]�OLX�VF����ֳ3H�V�D7Q�i�"�G]�:��Ɲh~��p�d�c_�8n����[u�B�QZ�I���n�v������z%��9�*����3�pf݌r44�P6G+�Q^����B� $�> |d?~�ֲN���j+�\+B��0�6��ۊ3�|��< �������	�f��x��=��C1l��vQ*���-��#7� L#���b�߃�95�C��\dq`N���H��0�	�5 �X��f���zZ<�ݽ��y9TM� ��}ٮ�� �t鏙��q_����I0)��
)�t]gX��K��J�����$�o�BI��5�}�cU6�L�ń�!�o~wK0?��'RI.ʢj���= H=�6�m�Ƞ����o������gд�K_to���Z��� hҵ5�C�N5"�g5��!	�1)?�5�F�CߑϢ��s� ��(���{4��>TrT�Xa�� (��U~�Qa�d�P GȐ��V�0�caN�n{��-�Q�8T��M�lvS��6��:��q50���P�.q�L����K�q�9�?��CF~ŋ�;{�@�!��ȴ<���w�4��a�uax��
� +�4+j�(֐�0�E:eL5����Q7T�b��C$��3��j����m�\"�}���F��0Pr�9Z�{���,8�3�˹�@f��������VA��(����`�v�X6�E�,��x��QC߅��v����5'f2��jQ`X�2�^)T�51+E��j�]�M���[�����S�BQb\�ZS���4=��\Y"��1 Ɛ{� ��ԗ˻|`l�A���l��.��3:ӟ���[��L�0_Sl��F��N"�'�m	Bػ ,9H,LDu�z�Y%<�~ya��ay�X~1�7M�f��٫Qz�����,�6�fD�~�[I>�O�~��4�,;���&��7�{Z�Q�lG��*��r��/��cH�6��!�����f=Y����ņ�Fb�QBSV�)��A�5(I��K-w����������%�$./dh{��L?�٥��:�j�Y��?�o.�4,�v����h� >��!/�c�b��\b�����\��n�e�YS�K�A�u�؝.�3� ���i��B' %�{s_5)!��L����Ȳ(K��	����F~������f�Js�k�)����9��������ق���j��0����	�O����DX�!��AwGG&�A�5�<RIS7������.��l���p>�핹1�u��%�VN^���
�Ȳ?��=����m�\�_���|�A�PT��b���VP��ޚ�*����Z�GH=��"��~q���4�>���h�Ҡ�^��̊[G�,���>.|���H*��=��ϖp#ȭ2,c�*��v�i0[�|��2����أ�@P�qhG��~L�+��6)�bC�726w�Ǜ/�ti�����R�y�t���7CIK�������넝��ȍ��N�����\���2�&V��&�cw3�������z~8|TpE�N�,M��H��w�Ԍv��&�D9j:���!sB�a�0E�ݵ�!��i���hm���C�GT���X�&2<oZ�j��{1����-�6p `Wf�Pv_J�8Åu���l%q[6�,� @�B�Ay��/��Q
=��}�G�^���=| �����������Z
>a�P�-h����_��Q��G�*�+��T�?��y��\ij��Z-��,�b�op`^������r��p �����y�4��1 �8��L���0��C�,���� 7���
N����u3ln�K.�\�G�ðǂ�!z3���Ij�K.�n��������'2����=�0�Ҝ���!k�?���`�(�g�k��#0�����Jj60H���zJ.~N�L��x�u3���ɿ�NNN��}�     