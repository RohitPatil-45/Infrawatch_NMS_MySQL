<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Top 10 Activity</title>
<link rel="shortcut icon" type="image/x-icon"
	href="<%=request.getContextPath()%>/webtemplate/dist/img/AdminLTELogo.png">

<!-- Google Font: Source Sans Pro -->
<!-- <link rel="stylesheet" -->
<!-- 	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"> -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/OfflineCss/googleapifamily.css">
<!-- Font Awesome Icons -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/fontawesome-free/css/all.min.css">
<!-- IonIcons -->
<!-- <link rel="stylesheet" -->
<!-- 	href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"> -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/OfflineCss/ionicons.min.css">
<!-- Theme style -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/dist/css/adminlte.min.css">
<!-- date range picker -->


<!-- <script type="text/javascript" -->
<!-- 	src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script> -->
<!-- <script type="text/javascript" -->
<!-- 	src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script> -->
<!-- <script type="text/javascript" -->
<!-- 	src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script> -->
<!-- <link rel="stylesheet" type="text/css" -->
<!-- 	href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" /> -->

<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/css/progressBar.css">
<!-- DataTables -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/dataTables.bootstrap.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/fixedHeader.dataTables.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/jquery.dataTables.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/select.dataTables.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/buttons.dataTables.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/css/colReorder.dataTables.min.css">
<!-- daterange picker -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/daterangepicker/daterangepicker.css">

<style>
.dropbtn {
	/* 	background-color: #3498DB; */
	color: #3498DB;
	padding: 16px;
	font-size: 16px;
	border: none;
	cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
	/* 	background-color: #2980B9; */
	color: red;
}

.dropdown {
	float: right !important;
	position: relative;
	display: inline-block;
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f1f1f1;
	min-width: 160px;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.dropdown-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

.dropdown a:hover {
	background-color: #ddd;
	background-color: #3498DB;
}

.show {
	display: block;
}

.card-header {
	background-color: dodgerblue;
}
/* .progress-bar.active,.progress.active .progress-bar {
    /* -webkit-animation:progress-bar-stripes 2s linear infinite; */
-o-animation














:







 







progress-bar-stripes







 







2








s







 







linear







 







infinite














;
animation














:







 







progress-bar-stripes







 







2








s







 







linear







 







infinite














;
}
*
/
</style>
</head>
<!--
`body` tag options:

  Apply one or more of the following classes to to the body tag
  to get the desired effect

  * sidebar-collapse
  * sidebar-mini
-->
<body class="hold-transition layout-top-nav">
	<%-- 
	<input type="hidden" name="deviceIP" id="deviceIP"
		value='<%=request.getParameter("nodeIP")%>'> --%>

	<div class="wrapper">

		<jsp:include page="header.jsp" />
		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<div class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<%-- 	<h1 class="m-0">
								Node Details
								<%=request.getParameter("nodeIP")%></h1> --%>
						</div>
						<!-- /.col -->
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">Top 10 Activity</li>
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
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-6">
							<div class="card card-primary card-outline">
								<div class="card-header">
									<h3 class="card-title">
										<i class="far fa-chart-bar"></i> Top 20 Prefixes by Number of
										Updates
									</h3>

									<div class="card-tools">
										<button type="button" class="btn btn-tool"
											data-card-widget="collapse">
											<i class="fas fa-minus"></i>
										</button>
										<button type="button" class="btn btn-tool"
											data-card-widget="remove">
											<i class="fas fa-times"></i>
										</button>
									</div>
								</div>
								<div class="card-body">
									<canvas id="prefixUpdatesChart" style="height: 300px;"></canvas>
								</div>
								<!-- /.card-body-->
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card card-primary card-outline">
								<div class="card-header">
									<h3 class="card-title">
										<i class="far fa-chart-bar"></i> Top 20 Prefixes by Number of
										Withdraws
									</h3>

									<div class="card-tools">
										<button type="button" class="btn btn-tool"
											data-card-widget="collapse">
											<i class="fas fa-minus"></i>
										</button>
										<button type="button" class="btn btn-tool"
											data-card-widget="remove">
											<i class="fas fa-times"></i>
										</button>
									</div>
								</div>
								<div class="card-body">
									<canvas id="prefixWithdrawsChart" style="height: 300px;"></canvas>
								</div>
								<!-- /.card-body-->
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card card-primary card-outline">
								<div class="card-header">
									<h3 class="card-title">
										<i class="far fa-chart-bar"></i> Per peer updates over time
									</h3>

									<div class="card-tools">
										<button type="button" class="btn btn-tool"
											data-card-widget="collapse">
											<i class="fas fa-minus"></i>
										</button>
										<button type="button" class="btn btn-tool"
											data-card-widget="remove">
											<i class="fas fa-times"></i>
										</button>
									</div>
								</div>
								<div class="card-body">
									<canvas id="peerUpdatesChart" style="height: 300px;"></canvas>
								</div>
								<!-- /.card-body-->
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card card-primary card-outline">
								<div class="card-header">
									<h3 class="card-title">
										<i class="far fa-chart-bar"></i> Per peer withdrawals over time
									</h3>

									<div class="card-tools">
										<button type="button" class="btn btn-tool"
											data-card-widget="collapse">
											<i class="fas fa-minus"></i>
										</button>
										<button type="button" class="btn btn-tool"
											data-card-widget="remove">
											<i class="fas fa-times"></i>
										</button>
									</div>
								</div>
								<div class="card-body">
									<canvas id="peerWithdrawsChart" style="height: 300px;"></canvas>
								</div>
								<!-- /.card-body-->
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<!-- Line chart -->

							<div class="card">
								<div class="card-header border-0">
									<h3 class="card-title">Basic Information</h3>

								</div>
								<div class="card-body table-responsive p-0">
									<table class="table table-striped table-valign-middle">
										<thead>
											<tr>
												<th>Label</th>
												<th>Information</th>

											</tr>
										</thead>

										<tbody>
											<tr>
												<td>Router Name</td>
												<td><span id="Node_ip">tievens-csr</span></td>
											</tr>
											<tr>
												<td>Peer Name</td>
												<td><span id="NodeNAme">sp-asrk1</span></td>
											</tr>
											<tr>
												<td>Prefix</td>
												<td><span id="DeviceName">190.2.184.0</span></td>
											</tr>
											<tr>
												<td>Prefix Length</td>
												<td><span id="DeviceName">22</span></td>
											</tr>
											<tr>
												<td>Origin</td>
												<td><span id="Location">Igp</span></td>
											</tr>
											<tr>
												<td>Origin AS</td>
												<td><span id="Location">23541</span></td>
											</tr>
											<tr>
												<td>Med</td>
												<td><span id="Company">0</span></td>
											</tr>

											<tr>
												<td>Local Pref</td>
												<td><span id="Version">0</span></td>
											</tr>

											<tr>
												<td>NH</td>
												<td><span id="SerialNo">64.71.176.49</span></td>
											</tr>

											<tr>
												<td>AS Path</td>
												<td><span id="District">65109 64530 109 7018
														11992 14638</span></td>
											</tr>
											<tr>
												<td>AS Path Count</td>
												<td><span id="status">5</span></td>
											</tr>


										</tbody>
									</table>
								</div>
							</div>

						</div>
					</div>
				</div>
				<!-- /.container-fluid -->
			</div>
			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->

		<!-- Footer  -->
		<jsp:include page="footer.jsp" />
		<!-- /. Footer -->

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->

	<!-- REQUIRED SCRIPTS -->

	<!-- jQuery -->

	<!-- Bootstrap -->



	<!-- start -->
	<!-- jQuery -->

	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/moment/moment.min.js"></script>
	<!-- jquery-validation -->

	<!-- end -->


	<script
		src="<%=request.getContextPath()%>/webtemplate/datatablesJS/jquery-3.5.1.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- AdminLTE -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/adminlte.js"></script>

	<!-- OPTIONAL SCRIPTS -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/chart.js/Chart.min.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="<%=request.getContextPath()%>/webtemplate/dist/js/demo.js"></script>
	<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/pages/dashboard3.js"></script>



	<!-- DataTables -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net/js/jquery.dataTables.min.js"></script>
	<%-- <script src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/dataTables.bootstrap.min.js"></script> --%>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net/js/dataTables.fixedHeader.js"></script>

	<%-- <script src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/dataTables.editor.min.js"></script> --%>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/dataTables.select.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/dataTables.colReorder.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/dataTables.buttons.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/jszip.min.js"></script>

	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/vfs_fonts.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/buttons.html5.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/datatables.net-bs/js/buttons.print.min.js"></script>
	<!-- Bootstrap 4 -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- AdminLTE App -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/adminlte.min.js"></script>
	<!-- FLOT CHARTS -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/flot/jquery.flot.js"></script>
	<!-- FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/flot/plugins/jquery.flot.resize.js"></script>
	<!-- FLOT PIE PLUGIN - also used to draw donut charts -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/flot/plugins/jquery.flot.pie.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="<%=request.getContextPath()%>/webtemplate/dist/js/demo.js"></script>
	<script src="<%=request.getContextPath()%>/webtemplate/js/highstock.js"></script>
	<script
		src="<%=request.getContextPath()%>/custom_js/topBgpdashboard.js"></script>

	<%-- 	<script src="<%=request.getContextPath()%>/custom_js/exportReports.js"></script> --%>

	<!-- date-range-picker -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/daterangepicker/daterangepicker.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/moment/moment.min.js"></script>

</body>
</html>
