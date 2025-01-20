<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BGP Peer Monitoring</title>
<link rel="shortcut icon" type="image/x-icon"
	href="<%=request.getContextPath()%>/webtemplate/dist/img/AdminLTELogo.png">
<!-- Google Font: Source Sans Pro -->
<!-- <link rel="stylesheet" -->
<!-- 	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"> -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/OfflineCss/googleapifamily.css">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/fontawesome-free/css/all.min.css">
<!-- DataTables -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">



<!-- Theme style -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/dist/css/adminlte.min.css">

<style>
#spinnerTopConnChart {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 1000;
}
</style>
</head>
<body class="hold-transition layout-top-nav">

	<div class="wrapper">

		<!-- Navbar -->

		<jsp:include page="header.jsp" />

		<!-- /.navbar -->

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1>BGP Peer Monitoring</h1>
						</div>
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">BGP Peer Monitoring</li>
							</ol>
						</div>
					</div>
				</div>
				<!-- /.container-fluid -->
			</section>

			<!-- Main content -->
			<section class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">


							<div class="card">
								<div class="card-header">
									<h3 class="card-title">BGP Peer Monitoring</h3>
								</div>
								<!-- /.card-header -->
								<div class="card-body">
									<div id="spinnerTopConnChart">
										<center>
											<i style='margin-left: 10px; margin-top: 30%; color: blue'
												id='' class='fa fa-spinner fa-spin fa-2x'></i>
									</div>

									<table id="example1" class="table table-bordered table-striped">
										<thead>
											<tr>
												<th>Peer Address</th>
												<th>Status</th>
												<th>Administrative Status</th>
												<th>Autonomous System (AS)</th>
												<th>State Changed Count</th>
												<th>Last Pooling Time</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>192.168.1.1</td>
												<td>Established</td>
												<td>Start</td>
												<td>12345</td>
												<td>0</td>
												<td>15 Dec 2024 05:25:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.2</td>
												<td>Idle</td>
												<td>Start</td>
												<td>23456</td>
												<td>0</td>
												<td>15 Dec 2024 05:26:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.3</td>
												<td>Active</td>
												<td>Start</td>
												<td>34567</td>
												<td>0</td>
												<td>15 Dec 2024 05:27:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.4</td>
												<td>Established</td>
												<td>Start</td>
												<td>45678</td>
												<td>0</td>
												<td>15 Dec 2024 05:28:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.5</td>
												<td>Idle</td>
												<td>Start</td>
												<td>56789</td>
												<td>0</td>
												<td>15 Dec 2024 05:29:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.6</td>
												<td>Active</td>
												<td>Start</td>
												<td>67890</td>
												<td>0</td>
												<td>15 Dec 2024 05:30:42 PM IST</td>
											</tr>
											<tr>
												<td>172.168.1.7</td>
												<td>Established</td>
												<td>Start</td>
												<td>78901</td>
												<td>0</td>
												<td>15 Dec 2024 05:31:42 PM IST</td>
											</tr>
											<tr>
												<td>172.255.0.1</td>
												<td>Idle</td>
												<td>Start</td>
												<td>89012</td>
												<td>0</td>
												<td>15 Dec 2024 05:32:42 PM IST</td>
											</tr>
											<tr>
												<td>172.168.1.9</td>
												<td>Active</td>
												<td>Start</td>
												<td>90123</td>
												<td>0</td>
												<td>15 Dec 2024 05:33:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.10</td>
												<td>Established</td>
												<td>Start</td>
												<td>12334</td>
												<td>0</td>
												<td>15 Dec 2024 05:34:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.11</td>
												<td>Idle</td>
												<td>Start</td>
												<td>23445</td>
												<td>0</td>
												<td>15 Dec 2024 05:35:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.12</td>
												<td>Active</td>
												<td>Start</td>
												<td>34556</td>
												<td>0</td>
												<td>15 Dec 2024 05:36:42 PM IST</td>
											</tr>
											<tr>
												<td>176.168.1.13</td>
												<td>Established</td>
												<td>Start</td>
												<td>45667</td>
												<td>0</td>
												<td>15 Dec 2024 05:37:42 PM IST</td>
											</tr>
											<tr>
												<td>171.168.1.14</td>
												<td>Idle</td>
												<td>Start</td>
												<td>56778</td>
												<td>0</td>
												<td>15 Dec 2024 05:38:42 PM IST</td>
											</tr>
											<tr>
												<td>192.168.1.15</td>
												<td>Active</td>
												<td>Start</td>
												<td>67889</td>
												<td>0</td>
												<td>15 Dec 2024 05:39:42 PM IST</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th>Peer Address</th>
												<th>Status</th>
												<th>Administrative Status</th>
												<th>Autonomous System (AS)</th>
												<th>State Changed Count</th>
												<th>Last Pooling Time</th>
											</tr>
										</tfoot>
									</table>



								</div>
								<!-- /.card-body -->
							</div>
							<!-- /.card -->
						</div>
						<!-- /.col -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container-fluid -->
			</section>
			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->
		<jsp:include page="footer.jsp" />

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->

	<!-- jQuery -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/sweetalert2/sweetalert2.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
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

	<!-- AdminLTE App -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/adminlte.min.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="<%=request.getContextPath()%>/webtemplate/dist/js/demo.js"></script>
	<script src="<%=request.getContextPath()%>/custom_js/addNode.js"></script>

	<!-- Page specific script -->
	<script>
		$(function() {
			$('#example1').DataTable(
					{
						lengthChange : false,
						autoWidth : false,
						"pageLength" : 10,
						scrollX : true,
						scrollY : true,
						"buttons" : [ "copy", "csv", "excel", "pdf", "print",
								"colvis" ],
						"initComplete" : function(settings, json) {
							// Hide loader once the DataTable is initialized
							$('#spinnerTopConnChart').hide();
						},
						"drawCallback" : function(settings) {
							// Hide loader after each draw (page change, etc.)
							$('#spinnerTopConnChart').hide();
						}
					}).buttons().container().appendTo(
					'#example1_wrapper .col-md-6:eq(0)');
		});
	</script>
</body>
</html>
