<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NPM | Score Dashboard</title>
<link rel="shortcut icon" type="image/x-icon"
	href="<%=request.getContextPath()%>/webtemplate/dist/img/AdminLTELogo.png">
<!-- Google Font: Source Sans Pro -->
<!-- <link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"> -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/css/fontAwesome.css">
<!-- Font Awesome Icons -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/fontawesome-free/css/all.min.css">
<!-- overlayScrollbars -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
<!-- Theme style -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/dist/css/adminlte.min.css">

<!-- DataTables -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/AdminPro/css/tree-viewer/tree-viewer.css">
</head>
<style>
.card-header {
	background-color: dodgerblue;
}

.modal-header {
	background-color: dodgerblue;
}

#searchDataOption {
	text-align: center !important;
}

.scrollDiv {
	float: left;
	overflow-y: auto;
	height: 79%;
	width: 100% !important;
}

.headerAlertbody {
	background-color: #ececec;
	padding: 0.5em;
	margin: 4px;
}

.headerAlert {
	font-size: 18px;
	font-weight: bold;
}

.donutChart {
	min-height: 250px;
	height: 250px;
	max-height: 250px;
	max-width: 100%;
}

:root { -
	-blue: #5e72e4; -
	-indigo: #5603ad; -
	-purple: #8965e0; -
	-pink: #f3a4b5; -
	-red: #f5365c; -
	-orange: #fb6340; -
	-yellow: #ffd600; -
	-green: #2dce89; -
	-teal: #11cdef; -
	-cyan: #2bffc6; -
	-white: #ffff; -
	-gray: #8898aa; -
	-gray-dark: #32325d; -
	-light: #ced4da; -
	-lighter: #e9ecef; -
	-primary: #5e72e4; -
	-secondary: #f7fafc; -
	-success: #2dce89; -
	-info: #11cdef; -
	-warning: #fb6340; -
	-danger: #f5365c; -
	-light: #adb5bd; -
	-dark: #212529; -
	-default: #172b4d; -
	-white: #fff; -
	-neutral: #fff; -
	-darker: black; -
	-breakpoint-xs: 0; -
	-breakpoint-sm: 576px; -
	-breakpoint-md: 768px; -
	-breakpoint-lg: 992px; -
	-breakpoint-xl: 1200px; -
	-font-family-sans-serif: Open Sans, sans-serif; -
	-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace;
}

*, *::before, *::after {
	box-sizing: border-box;
}

@
-ms-viewport {
	width: device-width;
}

figcaption, footer, header, main, nav, section {
	display: block;
}

body {
	font-family: Open Sans, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	margin: 0;
	text-align: left;
	color: #525f7f;
	background-color: #f8f9fe;
}

[tabindex='-1']:focus {
	outline: 0 !important;
}

h2, h5 {
	margin-top: 0;
	margin-bottom: .5rem;
}

p {
	margin-top: 0;
	margin-bottom: 1rem;
}

dfn {
	font-style: italic;
}

strong {
	font-weight: bolder;
}

a {
	text-decoration: none;
	color: #5e72e4;
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}

a:hover {
	text-decoration: none;
	color: #233dd2;
}

a:not ([href] ):not ([tabindex] ):hover, a:not ([href] ):not ([tabindex]
	 ):focus {
	text-decoration: none;
	color: inherit;
}

a:not ([href] ):not ([tabindex] ):focus {
	outline: 0;
}

caption {
	padding-top: 1rem;
	padding-bottom: 1rem;
	caption-side: bottom;
	text-align: left;
	color: #8898aa;
}

button {
	border-radius: 0;
}

button:focus {
	outline: 1px dotted;
	outline: 5px auto -webkit-focus-ring-color;
}

input, button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	margin: 0;
}

button, input {
	overflow: visible;
}

button {
	text-transform: none;
}

button, [type='reset'], [type='submit'] {
	-webkit-appearance: button;
}

button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner {
	padding: 0;
	border-style: none;
}

input[type='radio'], input[type='checkbox'] {
	box-sizing: border-box;
	padding: 0;
}

input[type='date'], input[type='time'], input[type='datetime-local'],
	input[type='month'] {
	-webkit-appearance: listbox;
}

legend {
	font-size: 1.5rem;
	line-height: inherit;
	display: block;
	width: 100%;
	max-width: 100%;
	margin-bottom: .5rem;
	padding: 0;
	white-space: normal;
	color: inherit;
}

[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button
	{
	height: auto;
}

[type='search'] {
	outline-offset: -2px;
	-webkit-appearance: none;
}

[type='search']::-webkit-search-cancel-button, [type='search']::-webkit-search-decoration
	{
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	font: inherit;
	-webkit-appearance: button;
}

[hidden] {
	display: none !important;
}

h2, h5, .h2, .h5 {
	font-family: inherit;
	font-weight: 600;
	line-height: 1.5;
	margin-bottom: .5rem;
	color: #32325d;
}

h2, .h2 {
	font-size: 2.25rem;
}

h5, .h5 {
	font-size: .8125rem;
}

.container-fluid {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
}

.row {
	display: flex;
	flex-wrap: wrap;
}

.col, .col-auto, .col-lg-6, .col-xl-3, .col-xl-6 {
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
}

.col {
	max-width: 100%;
	flex-basis: 0;
	flex-grow: 1;
}

.col-auto {
	width: auto;
	max-width: none;
	flex: 0 0 auto;
}

@media ( min-width : 992px) {
	.col-lg-6 {
		max-width: 50%;
		flex: 0 0 50%;
	}
}

@media ( min-width : 1200px) {
	.col-xl-3 {
		max-width: 25%;
		flex: 0 0 25%;
	}
	.col-xl-6 {
		max-width: 50%;
		flex: 0 0 50%;
	}
}

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	border: 1px solid rgba(0, 0, 0, .05);
	border-radius: .375rem;
	background-color: #fff;
	background-clip: border-box;
}

.card-body {
	padding: 1.5rem;
	flex: 1 1 auto;
}

.card-title {
	margin-bottom: 1.25rem;
}

@
keyframes progress-bar-stripes {from { background-position:1rem0;
	
}

to {
	background-position: 0 0;
}

}
.bg-info {
	background-color: #11cdef !important;
}

a.bg-info:hover, a.bg-info:focus, button.bg-info:hover, button.bg-info:focus
	{
	background-color: #0da5c0 !important;
}

.bg-warning {
	background-color: #fb6340 !important;
}

a.bg-warning:hover, a.bg-warning:focus, button.bg-warning:hover, button.bg-warning:focus
	{
	background-color: #fa3a0e !important;
}

.bg-danger {
	background-color: #f5365c !important;
}

a.bg-danger:hover, a.bg-danger:focus, button.bg-danger:hover, button.bg-danger:focus
	{
	background-color: #ec0c38 !important;
}

.bg-default {
	background-color: #172b4d !important;
}

a.bg-default:hover, a.bg-default:focus, button.bg-default:hover, button.bg-default:focus
	{
	background-color: #0b1526 !important;
}

.rounded-circle {
	border-radius: 50% !important;
}

.align-items-center {
	align-items: center !important;
}

@media ( min-width : 1200px) {
	.justify-content-xl-between {
		justify-content: space-between !important;
	}
}

.shadow {
	box-shadow: 0 0 2rem 0 rgba(136, 152, 170, .15) !important;
}

.mb-0 {
	margin-bottom: 0 !important;
}

.mr-2 {
	margin-right: .5rem !important;
}

.mt-3 {
	margin-top: 1rem !important;
}

.mb-4 {
	margin-bottom: 1.5rem !important;
}

.mb-5 {
	margin-bottom: 3rem !important;
}

.pt-5 {
	padding-top: 3rem !important;
}

.pb-8 {
	padding-bottom: 8rem !important;
}

.m-auto {
	margin: auto !important;
}

@media ( min-width : 768px) {
	.pt-md-8 {
		padding-top: 8rem !important;
	}
}

@media ( min-width : 1200px) {
	.mb-xl-0 {
		margin-bottom: 0 !important;
	}
}

.text-nowrap {
	white-space: nowrap !important;
}

.text-center {
	text-align: center !important;
}

.text-uppercase {
	text-transform: uppercase !important;
}

.font-weight-bold {
	font-weight: 600 !important;
}

.text-white {
	color: #fff !important;
}

.text-success {
	color: #2dce89 !important;
}

a.text-success:hover, a.text-success:focus {
	color: #24a46d !important;
}

.text-warning {
	color: #fb6340 !important;
}

a.text-warning:hover, a.text-warning:focus {
	color: #fa3a0e !important;
}

.text-danger {
	color: #f5365c !important;
}

a.text-danger:hover, a.text-danger:focus {
	color: #ec0c38 !important;
}

.text-white {
	color: #fff !important;
}

a.text-white:hover, a.text-white:focus {
	color: #e6e6e6 !important;
}

.text-muted {
	color: #8898aa !important;
}

@media print {
	*, *::before, *::after {
		box-shadow: none !important;
		text-shadow: none !important;
	}
}

p, h2 {
	orphans: 3;
	widows: 3;
}

h2 {
	page-break-after: avoid;
}

@
page {
	size: a3;
}

body {
	min-width: 992px !important;
}

}
figcaption, main {
	display: block;
}

main {
	overflow: hidden;
}

.bg-yellow {
	background-color: #ffd600 !important;
}

a.bg-yellow:hover, a.bg-yellow:focus, button.bg-yellow:hover, button.bg-yellow:focus
	{
	background-color: #ccab00 !important;
}

.bg-gradient-primary {
	background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

.bg-gradient-primary {
	background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
}

@
keyframes floating-lg { 0% {
	transform: translateY(0px);
}

}
}
[class*='shadow'] {
	transition: all .15s ease;
}

.text-sm {
	font-size: .875rem !important;
}

.text-white {
	color: #fff !important;
}

a.text-white:hover, a.text-white:focus {
	color: #e6e6e6 !important;
}

[class*='btn-outline-'] {
	border-width: 1px;
}

.card-stats .card-body {
	padding: 1rem 1.5rem;
}

.main-content {
	position: relative;
}

@media ( min-width : 768px) {
	.main-content .container-fluid {
		padding-right: 39px !important;
		padding-left: 39px !important;
	}
}

.footer {
	padding: 2.5rem 0;
	background: #f7fafc;
}

.footer .copyright {
	font-size: .875rem;
}

.header {
	position: relative;
}

.icon {
	width: 3rem;
	height: 3rem;
}

.icon i {
	font-size: 2.25rem;
}

.icon-shape {
	display: inline-flex;
	padding: 12px;
	text-align: center;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
}

.icon-shape i {
	font-size: 1.25rem;
}

@media ( min-width : 768px) { @
	keyframes show-navbar-dropdown { 0% {
		transition: visibility .25s, opacity .25s, transform .25s;
		transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
		opacity: 0;
	}
}

@
keyframes hide-navbar-collapse {from { transform:scale(1);
	transform-origin: 100% 0;
	opacity: 1;
}

to {
	transform: scale(.95);
	opacity: 0;
}

}
p {
	font-size: 1rem;
	font-weight: 300;
	line-height: 1.7;
}
}
</style>
<body
	class="hold-transition layout-top-nav layout-fixed layout-navbar-fixed layout-footer-fixed">
	<!-- class="hold-transition dark-mode layout-top-nav layout-fixed layout-navbar-fixed layout-footer-fixed">  -->
	<div class="wrapper">

		<!-- Preloader -->
		<div
			class="preloader flex-column justify-content-center align-items-center">
			<img class="animation__wobble"
				src="<%=request.getContextPath()%>/webtemplate/dist/img/AdminLTELogo.png"
				alt="AdminLTELogo" height="60" width="60">
		</div>

		<!-- Navbar -->
		<jsp:include page="header.jsp" />
		<!-- /.navbar -->

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<div class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1 class="m-0">Score Dashboard</h1>
						</div>
						<!-- /.col -->
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">Score Dashboard</li>
							</ol>
						</div>
						<!-- /.col -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container-fluid -->
			</div>
			<!-- /.content-header -->

			<!-- Main content -->
			<section class="content">
				<div class="container-fluid">
					<!-- Info boxes -->
					<div class="row">
						<div class="col-12 col-sm-6 col-md-4">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase  mb-0">Total Score</h5>
											</div>
											<div class="row">
												<span class=" font-weight-bold mb-0 text-warning"
													style="font-size: 3.20rem;">31</span><span
													class="font-weight-bold"
													style="display: flex; justify-content: flex-end; align-items: flex-end; width: 32px; height: 62px;">/45</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-info text-white rounded-circle shadow">
												<i class="fas fa fa-star"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 3.48%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
							<!-- /.info-box -->
						</div>
						<!-- /.col -->
						<div class="col-12 col-sm-6 col-md-2">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase  mb-0">Performance
												</h5>
												<span class="text-uppercase  mb-0">&nbsp;Score</span>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-warning">07</span><span
													class="font-weight-bold"
													style="display: flex; justify-content: flex-end; align-items: flex-end; width: 32px; height: 45px;">/10</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-danger text-white rounded-circle shadow">
												<i class="fa fa-chart-bar"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 1.23%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
							<!-- /.info-box -->
						</div>
						<!-- /.col -->

						<!-- fix for small devices only -->
						<div class="clearfix hidden-md-up"></div>

						<div class="col-12 col-sm-6 col-md-2">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase  mb-0">Availability
												</h5>
												<span class="text-uppercase  mb-0">&nbsp;Score</span>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-success">14</span><span
													class="font-weight-bold"
													style="display: flex; justify-content: flex-end; align-items: flex-end; width: 32px; height: 45px;">/15</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-warning text-white rounded-circle shadow">
												<i class="fas fa fa-check"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 9.86%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
							<!-- /.info-box -->
						</div>
						<!-- /.col -->
						<div class="col-12 col-sm-6 col-md-2">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase  mb-0">Security</h5>
												<span class="text-uppercase  mb-0">&nbsp;Score</span>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-warning">07</span><span
													class="font-weight-bold"
													style="display: flex; justify-content: flex-end; align-items: flex-end; width: 32px; height: 45px;">/10</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-danger text-white rounded-circle shadow">
												<i class="fa fa-lock"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 0.53%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
							<!-- /.info-box -->
						</div>

						<div class="col-12 col-sm-6 col-md-2">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase  mb-0">Capacity</h5>
												<span class="text-uppercase  mb-0">&nbsp;Score</span>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-danger">03</span><span
													class="font-weight-bold"
													style="display: flex; justify-content: flex-end; align-items: flex-end; width: 32px; height: 45px;">/10</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-info text-white rounded-circle shadow">
												<i class="fa fa-link"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 5.78%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
							<!-- /.info-box -->
						</div>
						<!-- /.col -->
					</div>
					<!-- /.row -->


					<!-- Main row -->
				</div>
				<br>
				<div class="container-fluid">
					<div class="row">
						<!-- Left col -->


						<div class="col-12 col-sm-6 col-md-6">

							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body"
									style="display: flex; justify-content: center;!important /* Centers horizontally */ align-items: center;!important  /* Centers vertically */ height: 100%;!important ">
									<div class="row">
										<div id="solidgauge01"></div>

									</div>

								</div>
							</div>


						</div>

						<div class="col-12 col-sm-6 col-md-6">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body"
									style="display: flex; justify-content: center;!important /* Centers horizontally */ align-items: center;!important  /* Centers vertically */ height: 100%;!important ">
									<div class="row">
										<div id="solidgauge02"></div>

									</div>

								</div>
							</div>
						</div>

						<!-- /.col -->

					</div>
				</div>
				<!-- /.row -->
				<br>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<span class="m-0" style="font-size: x-large;">Performance</span>
						</div>
					</div>
				</div>

				<!-- Main row -->
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body"
									style="display: flex; justify-content: center;!important /* Centers horizontally */ align-items: center;!important  /* Centers vertically */ height: 100%;!important ">
									<div class="row">
										<div id="container-speed001" class="chart-container"></div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 col-md-3">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body"
									style="display: flex; justify-content: center;!important /* Centers horizontally */ align-items: center;!important  /* Centers vertically */ height: 100%;!important ">
									<div class="row">
										<div id="container-speed002" class="chart-container"></div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 col-md-6">
							<div class="card">
								<div class="card-body"
									style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 1% 0;">
									<div class="row">
										<div id="containerlinegraph001"></div>

									</div>

								</div>
							</div>
						</div>


					</div>
				</div>

				<br>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<span class="m-0" style="font-size: x-large;">Availability</span>
						</div>
					</div>
				</div>

				<!-- Main row -->
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-6">
							<div class="card">
								<div class="card-body"
									style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 1% 0;">
									<div id="container-barghraph001" style="width: 100%;"></div>
								</div>
							</div>


						</div>

						<div class="col-12 col-sm-6 col-md-6">
							<div class="card">
								<div class="card-body"
									style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 1% 0;">
									<div class="row">
										<div id="containerlinegraph002"></div>

									</div>

								</div>
							</div>
						</div>


					</div>
				</div>
				<br>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<span class="m-0" style="font-size: x-large;">Security</span>
						</div>
					</div>
				</div>
				<!--/. container-fluid -->
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-4">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase text-muted mb-0">Vulnerabilities</h5>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-warning">423</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-warning text-white rounded-circle shadow">
												<i class="fa fa-solid fa-unlock"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 9.21%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 col-md-4">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase text-muted mb-0">Threats</h5>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-danger">59</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-danger text-white rounded-circle shadow">
												<i class="fa fa-solid fa-skull-crossbones"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 1.09%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 col-md-4">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase text-muted mb-0">Failed
													Logins</h5>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-info">243</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-info text-white rounded-circle shadow">
												<i class="fa fa-exclamation-triangle"></i>
											</div>
										</div>
									</div>
									<p class="mt-3 mb-0 text-muted text-sm">
										<span class="text-success mr-2"><i
											class="fa fa-arrow-up"></i> 0.64%</span> <span class="text-nowrap">Since
											last month</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<span class="m-0" style="font-size: x-large;">Capacity</span>
						</div>
					</div>
				</div>

				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-6 col-md-3">
							<div class="card card-stats mb-4 mb-xl-0">
								<div class="card-body"
									style="display: flex; justify-content: center;!important /* Centers horizontally */ align-items: center;!important  /* Centers vertically */ height: 100%;!important ">
									<div class="row">
										<div id="container-speed003" class="chart-container"></div>
									</div>

								</div>
							</div>
						</div>

						<div class="col-12 col-sm-6 col-md-6">
							<div class="card">
								<div class="card-body"
									style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 1% 0;">
									<div class="row">
										<div id="containerlinegraph003"></div>

									</div>

								</div>
							</div>
						</div>

						<div class="col-12 col-sm-6 col-md-3">
							<div class="card card-stats mb-4 mb-xl-0" style="height: 94%;">
								<div class="card-body">
									<div class="row">
										<div class="col">
											<div class="row">
												<h5 class="card-title text-uppercase text-muted mb-0">Connection
													Limits</h5>
											</div>
											<div class="row">
												<span class="h2 font-weight-bold mb-0 text-info">521</span>
											</div>
										</div>
										<div class="col-auto">
											<div
												class="icon icon-shape bg-info text-white rounded-circle shadow">
												<i class="fa fa-solid fa-signal"></i>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>


					</div>
				</div>

			</section>
			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->
	</div>




	<!-- ./wrapper -->

	<!-- REQUIRED SCRIPTS -->
	<!-- jQuery -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- overlayScrollbars -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
	<!-- AdminLTE App -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/adminlte.js"></script>

	<!-- PAGE PLUGINS -->
	<!-- jQuery Mapael -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/raphael/raphael.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery-mapael/jquery.mapael.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery-mapael/maps/usa_states.min.js"></script>
	<!-- ChartJS -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/chart.js/Chart.min.js"></script>

	<!-- DataTables  & Plugins -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jszip/jszip.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/pdfmake/pdfmake.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/pdfmake/vfs_fonts.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.print.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/AdminPro/js/tree-line/jstree.min.js"></script>

	<!-- 	<script src="https://code.highcharts.com/highcharts.js"></script> -->

	<!-- 	<script -->
	<%-- 		src="<%=request.getContextPath()%>/webtemplate/OfflineJs/highcharts.js"></script> --%>

	<!-- 	<script src="https://code.highcharts.com/modules/exporting.js"></script> -->
	<!-- 	<script -->
	<%-- 		src="<%=request.getContextPath()%>/webtemplate/OfflineJs/exporting.js"></script> --%>
	<!-- 	<script src="https://code.highcharts.com/modules/accessibility.js"></script> -->

	<!-- 	<script -->
	<%-- 		src="<%=request.getContextPath()%>/webtemplate/OfflineJs/accessibility.js"></script> --%>

	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/solid-gauge.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>


	<!-- Page specific script -->
	<script src="<%=request.getContextPath()%>/custom_js/scoreDashboard.js"></script>

	<script>
		// Device Count
		/* var vUpCount = localStorage.getItem("upCountVar");
		var vDownCount = localStorage.getItem("downCountVar");
		var vWarningCount = localStorage.getItem("warningCountVar");

		var upCountVal = Number(vUpCount);
		var downCountVal = Number(vDownCount);
		var warningCountVal = Number(vWarningCount);

		var devicedonutData = {
			labels : [ 'Up', 'Down', 'Warning' ],
			datasets : [ {
				data : [ upCountVal, downCountVal, warningCountVal ],
				backgroundColor : [ '#00a65a', '#f56954', '#f39c12' ],
			} ]
		} */

		// Link Count
		/* var vUpLinkCount = localStorage.getItem("upLinkCountVar");
		var vDownLinkCount = localStorage.getItem("downLinkCountVar");

		var upLinkCountVal = Number(vUpLinkCount);
		var downLinkCountVal = Number(vDownLinkCount);

		var linkdonutData = {
			labels : [ 'Up', 'Down' ],
			datasets : [ {
				data : [ upLinkCountVal, downLinkCountVal ],
				backgroundColor : [ '#00a65a', '#f56954' ],
			} ]
		} */

		//-------------
		//- PIE CHART -
		//-------------
		// Get context with jQuery - using jQuery's .get() method.
		/* var devicepieChartCanvas = $('#devicepieChart').get(0).getContext('2d')
		var devicepieData = devicedonutData;
		var devicepieOptions = {
			maintainAspectRatio : false,
			responsive : true,
		}

		//Create pie or douhnut chart
		// You can switch between pie and douhnut using the method below.
		var devicechart = new Chart(devicepieChartCanvas, {
			type : 'pie',
			data : devicepieData,
			options : devicepieOptions
		}) */

		/* var linkpieChartCanvas = $('#linkpieChart').get(0).getContext('2d')
		var linkpieData = linkdonutData;
		var linkpieOptions = {
			maintainAspectRatio : false,
			responsive : true,
		}
		//Create pie or douhnut chart
		// You can switch between pie and douhnut using the method below.
		var linkpie = new Chart(linkpieChartCanvas, {
			type : 'pie',
			data : linkpieData,
			options : linkpieOptions
		}) */
	</script>
	<script>
		/* $(function() {
			$("#groupSummary").DataTable(
					{
						data : ${groupSummary},
						"responsive" : true,
						"lengthChange" : false,
						"autoWidth" : false,
						"buttons" : [ "copy", "csv", "excel", "pdf", "print",
								"colvis" ]
					}).buttons().container().appendTo(
					'#example1_wrapper .col-md-6:eq(0)');
		}); */
	</script>

</body>
</html>
