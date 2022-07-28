package br.proj.vidaimobiliaria.domain;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sun.istack.NotNull;

import br.proj.vidaimobiliaria.controller.CategoriaController;

@Entity
@Table(name="imovel")
@RequestMapping("imovel")
public class Imovel {
	
	@Id
	@Column(name="codigo", unique=true)
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int codigo;
	
	@ManyToOne
	@JoinColumn(name="categoria_codigo")
	private Categoria categoria = new Categoria();	
	
	@NotNull
	@Column(name="titulo", length=50)
	private String titulo;
	
	@Column(name="endereco", length=150)
	private String endereco;
	
	@Column(name="descricao", length=250)
	private String descricao;
	
	@NotNull
	@Column(name="qtdeQuarto")
	private Byte qtdeQuarto;
	
	@NotNull
	@Column(name="qtdeBanheiro")
	private Byte qtdeBanheiro;
	
	@Column(name="preco", nullable=false, scale=2)
	private float preco;
	
	@NotNull
	@Column(name="metragem", length=50)
	private float metragem;
	
	@NotNull
	@Column(name="imagem")
	private String imagem;

	
	public Imovel() {
		
	}
	
	public Imovel(int codigo, String descricao, String endereco, String imagem, float metragem, 
				  float preco,  Byte qtdeBanheiro, Byte qtdeQuarto, String titulo, Categoria categoria) {
		super();
		this.codigo = codigo;
		this.titulo = titulo;
		this.endereco = endereco;
		this.descricao = descricao;
		this.qtdeQuarto = qtdeQuarto;
		this.qtdeBanheiro = qtdeBanheiro;
		this.preco = preco;
		this.metragem = metragem;
		this.imagem = imagem;
		this.categoria = categoria;
	}
	
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Byte getQtdeQuarto() {
		return qtdeQuarto;
	}
	public void setQtdeQuarto(Byte qtdeQuarto) {
		this.qtdeQuarto = qtdeQuarto;
	}
	public Byte getQtdeBanheiro() {
		return qtdeBanheiro;
	}
	public void setQtdeBanheiro(Byte qtdeBanheiro) {
		this.qtdeBanheiro = qtdeBanheiro;
	}
	public float getPreco() {
		return preco;
	}
	public void setPreco(float preco) {
		this.preco = preco;
	}
	public float getMetragem() {
		return metragem;
	}
	public void setMetragem(float metragem) {
		this.metragem = metragem;
	}
	
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((categoria == null) ? 0 : categoria.hashCode());
		result = prime * result + codigo;
		result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
		result = prime * result + ((endereco == null) ? 0 : endereco.hashCode());
		result = prime * result + ((imagem == null) ? 0 : imagem.hashCode());
		result = prime * result + Float.floatToIntBits(metragem);
		result = prime * result + Float.floatToIntBits(preco);
		result = prime * result + ((qtdeBanheiro == null) ? 0 : qtdeBanheiro.hashCode());
		result = prime * result + ((qtdeQuarto == null) ? 0 : qtdeQuarto.hashCode());
		result = prime * result + ((titulo == null) ? 0 : titulo.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Imovel other = (Imovel) obj;
		if (categoria == null) {
			if (other.categoria != null)
				return false;
		} else if (!categoria.equals(other.categoria))
			return false;
		if (codigo != other.codigo)
			return false;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
		if (endereco == null) {
			if (other.endereco != null)
				return false;
		} else if (!endereco.equals(other.endereco))
			return false;
		if (imagem == null) {
			if (other.imagem != null)
				return false;
		} else if (!imagem.equals(other.imagem))
			return false;
		if (Float.floatToIntBits(metragem) != Float.floatToIntBits(other.metragem))
			return false;
		if (Float.floatToIntBits(preco) != Float.floatToIntBits(other.preco))
			return false;
		if (qtdeBanheiro == null) {
			if (other.qtdeBanheiro != null)
				return false;
		} else if (!qtdeBanheiro.equals(other.qtdeBanheiro))
			return false;
		if (qtdeQuarto == null) {
			if (other.qtdeQuarto != null)
				return false;
		} else if (!qtdeQuarto.equals(other.qtdeQuarto))
			return false;
		if (titulo == null) {
			if (other.titulo != null)
				return false;
		} else if (!titulo.equals(other.titulo))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Imovel [codigo=" + codigo + ", titulo=" + titulo + ", endereco=" + endereco + ", descricao=" + descricao
				+ ", qtdeQuarto=" + qtdeQuarto + ", qtdeBanheiro=" + qtdeBanheiro + ", preco=" + preco + ", metragem="
				+ metragem + ", imagem=" + imagem + ", categorias=" + categoria.getNome() + "]";
	}
	
}
