--
-- Base de datos: `crud_toka`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id_admin`, `name`, `email`, `password`) VALUES
(1, 'Pablo', 'admin@mail.com', '$2a$10$egGwNep4gi9qxMmv2RkksOjKEdJVIoNoiQt012d8FyYuR7.kC/3V6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_personasfisicas`
--

CREATE TABLE `tb_personasfisicas` (
  `IdPersonaFisica` int(11) NOT NULL,
  `FechaRegistro` datetime NOT NULL,
  `FechaActualizacion` date NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `ApellidoPaterno` varchar(100) NOT NULL,
  `ApellidoMaterno` varchar(100) NOT NULL,
  `RFC` char(13) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `UsuarioAgrega` int(10) NOT NULL,
  `Activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tb_personasfisicas`
--

INSERT INTO `tb_personasfisicas` (`IdPersonaFisica`, `FechaRegistro`, `FechaActualizacion`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `RFC`, `FechaNacimiento`, `UsuarioAgrega`, `Activo`) VALUES


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `tb_personasfisicas`
--
ALTER TABLE `tb_personasfisicas`
  ADD PRIMARY KEY (`IdPersonaFisica`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tb_personasfisicas`
--
ALTER TABLE `tb_personasfisicas`
  MODIFY `IdPersonaFisica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
